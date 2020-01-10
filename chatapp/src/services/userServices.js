import axios from 'axios';
// export function getAll(url, data){
//     return axios.post(url, data);
// }
const url = "http://localhost:3000"
export default {
    login(data) {
        console.log("dkl,miokl;jmoi;mjl;m,",data)
        return axios.post(`${url}/login`, data).then(res=>res.data)
    },
    register(data) {
        console.log("dkl,miok///////////////////////////;m,",data)
        return axios.post(`${url}/register`, data).then(res=>res.data)
    },
    resetpassword(data){
        console.log("hggikgwegjgqwugwuddgyweugdw",data)
        return axios.post(`${url}/resetpassword`, data).then(res=>res.data)
    },
    forgotpassword(data){
        console.log("mbfrfiukfysra",data)
        return axios.post(`${url}/forgotpassword`, data).then(res=>res.data)
    },
    getUsers(){
        console.log("mbfrfiukfysra")
        return axios.get(`${url}/getUsers`).then(res=>res.data)
    },
    getMessage(){
        console.log("mbfrfiukfysra")
        return axios.get(`${url}/getMessage`).then(res=>res.data)
    }
    
    }