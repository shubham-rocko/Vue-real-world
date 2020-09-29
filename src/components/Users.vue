<template>
  <div class="container">
    <h3>Users:</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow" v-for="user in users" v-bind:key="user.id" @click="showUserDetails(user.id)"> 
          <th scope="row">{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.address.city}}</td>
        </tr>
      </tbody>
    </table> 
  </div> 
</template>

<script>
import axios from 'axios';

  export default {
    name: 'Users',
    data() {
      return {
        users: null,
      };
    },
    methods: {
      showUserDetails(id){
        console.log("Show data", id)
        this.$router.push(`/users/${id}`)
      }
    },
    created: function() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          this.users = res.data;
        })
    }
  }

</script>
<style scoped>
  h3 {
    margin-bottom: 5%;
  }
  .table{
    border: 1px solid;
  }
  .tableRow{
    cursor: pointer;
  }
</style>