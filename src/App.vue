<template>
  <div id="app">
    <!-- <Users/> -->
    <ul class="app-header">
      <li :class="[currentPage === '/' ? 'activeClass' : '']">
        <router-link to="/">Home</router-link>
      </li>
      <li :class="[currentPage.includes('/users') ? 'activeClass' : '']">
        <router-link to="/users">Users</router-link>
      </li>
    </ul>
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
  },
  computed: {
    currentPage(){
      return this.$route.path;
    }
  }
}
</script>

<style>
body{
  background: #c1e8ee69;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.4;
}

ul {
  list-style-type: none;
}

.app-header{
  padding: 20px;
  background: #718acf;
  display: flex;
}

.app-header li{
  margin: 0 40px;
  font-size: 20px;
  position: relative;
}

.app-header li a{
  color: #efefef;
  text-decoration: none;
}

.app-body{
  margin: 20px 60px;
}

.activeClass{
  padding: 3px 24px;
  border-radius: 20px;
  background: #4d6a95;
}
</style>
