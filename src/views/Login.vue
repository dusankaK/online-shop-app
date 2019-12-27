<template>
  <div class="card container mt-5 wrappForm" >

  <h5 class="text-center mt-3 mb-4">
      <strong>Login</strong>
  </h5>
  <form @submit.prevent="submit" class="wrappForm">
      <div class="alert alert-danger" role="alert" v-if="loginErrors">
        <strong> {{loginErrors}} </strong>
      </div>   
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" class="form-control" aria-describedby="name" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" class="form-control" aria-describedby="email" placeholder="Enter password">
      </div> 
      <div class="form-group text-center">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>
  </form>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '', 
            password: ''
        }
    },
    computed: {
      ...mapGetters({
        loginErrors: 'errors'
      })
    },
    methods: {
        ...mapActions ({
            login: 'login'
        }),
        submit() {
            this.login({
                email: this.email,
                password: this.password
            }).then(() => {
              if(this.loginErrors === null)
                this.$router.push({
                    name: 'shops'
                })
            })
        }
    }
}
</script>

<style>
 .wrappForm{
       width: 50%;
       margin: 0 auto;
       margin-top: 3rem;
   }
</style>