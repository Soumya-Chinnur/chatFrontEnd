import { validationMixin } from 'vuelidate'
import service from "../../services/userServices"

import {
  required,
  email,
  // maxLength,
  minLength
} from 'vuelidate/lib/validators'

export default {
  name: 'register',
  mixins: [validationMixin],
  data: () => ({
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    user: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
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
      this.user.firstName = null
      this.user.lastName = null
      this.user.email = null
      this.user.password = null
    },
    saveUser() {
      this.sending = true
      console.log(this.user);
      let object ={
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
      }
      service.register(object).then(res=>{
        console.log(res)
      })

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.user.firstName} ${this.user.lastName}`
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
