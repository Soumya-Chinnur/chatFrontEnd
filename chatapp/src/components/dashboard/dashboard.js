import service from "../../services/userServices"
import socket from 'socket.io';
  export default {   
  name: 'dashboard',
  components: {},
  props: [],
  data() {
    return {
      // isConnected: false,
      newMessage: null,
      messages: [],

      users: [],
      userName: null,
      currUser: null
    }
  },


  computed: {

  },
  mounted() {
    service.getUsers().then(res => {
      console.log(res)
      this.users = res

    })



  },
  methods: {
    person(user) {
      localStorage.setItem('receiverId', user._id)
      service.getMessage().then(res => {
        console.log('ijiuiojm',res)
        // this.users=res
        let messages = []
        let senderId = localStorage.getItem('id');
        let receiverId = localStorage.getItem('receiverId');
        for (let i = 0; i < res.length; i++) {
          console.log(res[i], " hiiii")
          let list = res[i];
          if ((senderId == list.from && receiverId == list.to)
            || senderId == list.to && receiverId == list.from) {
            messages.push(list);
            // console.log("msgArr--",messages)
          }
        }
        console.log(messages, "232332323")

      })
    }

  },
  send() {
    this.messages.push({
      message: this.newMessage,

    });
    socket.emit('newMsg', {
      message: this.newMessage,

    });
    this.newMessage = null;
  },
}


