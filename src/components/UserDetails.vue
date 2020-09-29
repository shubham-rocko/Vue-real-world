<template>
    <div>
        <button @click="backToUsers"> Back to Users </button>
        <h2>User Details</h2>
        <ul class='detail-container'>
            <li>
                <label>User Name</label>
                <span>{{user.name}}</span>
            </li>
            <li>
                <label>Phone No.</label>
                <span>{{user.phone}}</span>
            </li>
            <li>
                <label>Email Id</label>
                <span>{{user.email}}</span>
            </li>
            <li>
                <label>Organization Name</label>
                <span>{{user.company.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserDetails',
    data(){
        return {
            user: null
        }
    },
    methods: {
        backToUsers(){
            this.$router.push('/users');
        }
    },
    created: function(){
        axios
        .get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.userId)
        .then(res => {
          this.user = res.data;
          console.log(this.user)
        })
    }
}
</script>

<style scoped>
    button{
        border: 0px;
        background: transparent;
        border-bottom: 2px solid;
        box-shadow: 1px 1px;
    }
    ul{
        margin: 0;
        padding: 0;
    }
    label{
        margin: 10px 20px;
        font-weight: 600;
        font-size: 16px;
    }
</style>