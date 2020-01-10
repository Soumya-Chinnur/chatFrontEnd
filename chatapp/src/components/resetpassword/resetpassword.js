import { validationMixin } from 'vuelidate'
import service from "../../services/userServices"

import {
  required,
  //email,
  minLength
} from 'vuelidate/lib/validators'
export default
  {
    name: 'resetpassword',
    mixins: [validationMixin],
    data: () =>
      ({
        form:
        {
          newpassword: null,
          confirmpassword: null,
        },
        userSaved: false,
        sending: false,
        lastUser: null
      }),
    validations:
    {
      form:
      {
        newpassword:
        {
          required,
          minLength: minLength(3)

        },
        confirmpassword:
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
        this.form.newpassword = null
        this.form.confirmpassword = null
      },
      saveUser() {
        this.sending = true
       // console.log(this.user);
        let object = {
          newpassword: this.form.newpassword,
          confirmpassword: this.form.confirmpassword
          
        }
        service.resetpassword(object).then(res=>{
          console.log(res)
        })

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.newpassword} ${this.form.confirmpassword}`
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





