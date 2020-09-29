import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Users from './components/Users.vue';
import Home from './components/Home.vue';
import UserDetails from './components/UserDetails.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  { path: '/users/:userId', component: UserDetails },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false
Vue.prototype.appName = 'My App'

new Vue({
  beforeCreate: function() {
    console.log(this.appName)
  },
  created: function() {
    console.log(this.appName+' new')
  },
  router,
  render: h => h(App),
}).$mount('#app')
