import router from "../../router"
import { validationMixin } from 'vuelidate'
import service from "../../services/userServices"
import {
  required,
  email,
  //minLength
} from 'vuelidate/lib/validators'
export default
  {
    name: 'forgotpassword',
    mixins: [validationMixin],
    data: () =>
      ({
        form:
        {
          email: null,
        },
        userSaved: false,
        sending: false,
        lastUser: null
      }),
    validations:
    {
      form:
      {
        email:
        {
          required,
          email
        },

      }
    },
    computed: {

    },
    mounted() {

    },
    methods:
    {
      // register() {
      //   router.push('/register')
      // },
      // forgotpassword() {
      //   router.push('/forgotpassword')
      // },
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm() {
        this.$v.$reset()
        this.form.email = null
      },
      saveUser() {
        this.sending = true
        let object ={
          email: this.user.email
        }
        service.register(object).then(res=>{
          console.log(res)
        })

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.email}`
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



