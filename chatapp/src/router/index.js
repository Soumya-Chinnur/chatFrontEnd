import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/login";
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import register from "../components/register";
import Vuelidate from "vuelidate";
import forgotpassword from "../components/forgotpassword";
import resetpassword from "../components/resetpassword";
import dashboard from "../components/dashboard";

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(VueMaterial)
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  {
    path: "/resetpassword",
    name: "resetpassword",
    component: resetpassword
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: forgotpassword
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: login
  // },

  {
    path: "/",
    name: "login",
    component: login
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
