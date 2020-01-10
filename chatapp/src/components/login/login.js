import router from "../../router"
import service from "../../services/userServices"
// import { getAll } from '/home/user/vueproject/chatapp/src/components/login'
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength
} from 'vuelidate/lib/validators'
export default
  {
    name: 'login',
    mixins: [validationMixin],
    data: () =>
      ({
        user:
        {
          email: null,
          password: null,
        },
        userSaved: false,
        sending: false,
        lastUser: null
      }),
    validations:
    {
      user:
      {
        email:
        {
          required,
          email
        },
        password:
        {
          required,
          minLength: minLength(3)
        }
      }
    },
    computed: {

    },
    mounted() {

    },
    methods:
    {
      register() {
        router.push('/register')
      },
      forgotpassword() {
        router.push('/forgotpassword')
      },
      resetpassword() {
        router.push('/resetpassword')
      },
      getValidationClass(fieldName) {
        const field = this.$v.user[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm() {
        this.$v.$reset()
        this.user.email = null
        this.user.password = null
      },
      saveUser() {
        this.sending = true
        var postdata = {
          email: this.user.email,
          password: this.user.password
        }
        service.login(postdata).then(res => {
          console.log(res)
          localStorage.setItem('fir', res.data.firstName)
          localStorage.setItem('id', res.data._id)
          router.push('/dashboard')

        })


        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.user.email} ${this.user.password}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 150000)
      },
      validateUser() {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }


