<template>

<div class="card container mt-5 wrappForm">
    <h5 class="text-center mt-3 mb-4">
      <strong>Register</strong>
    </h5>

  <form class="" @submit.prevent="onSubmit">
    <div class="form-row mb-4">
        <div class="col">
            <!-- First name -->
            <input type="text" 
                   id="firstname" 
                   class="form-control" 
                   placeholder="First name" 
                   v-model="form.first_name" required>
        </div>

        <div class="col">
            <!-- Last name -->
            <input type="text" 
                   id="lastname" 
                   class="form-control" 
                   placeholder="Last name" 
                   v-model="form.last_name" 
                   required>
        </div>
    </div>

    <!-- E-mail -->
    <input type="email" 
           id="email" 
           class="form-control mb-4" 
           placeholder="E-mail" 
           v-model="form.email" 
           required>
    <div class="alert alert-danger" 
         role="alert" 
         v-if="registerErrors.email">
        <strong> {{registerErrors.email[0]}} </strong>
    </div>
    <!-- Password -->
    <input type="password" 
           id="password" 
           name="password" 
           class="form-control" 
           placeholder="Password" 
           aria-describedby="defaultRegisterFormPasswordHelpBlock" 
           pattern="(?=.*\d)(?=.*[a-z]).{8,}" 
           v-model="form.password" required>
    <small id="defaultRegisterFormPasswordHelpBlock" 
           class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

    <input type="password" 
           id="defaultRegisterConfirmPassword" 
           name="password_confirm" 
           class="form-control" 
           placeholder="Confirm" 
           aria-describedby="defaultRegisterFormPasswordHelpBlock" 
           v-model="form.password_confirm" 
           required>
    <small id="defaultRegisterConfirmPasswordHelpBlock" 
           class="form-text text-muted mb-4">
        Confirm password
    </small>
    <div class="alert alert-danger" 
         role="alert" v-if="registerErrors.password_confirm">
        <strong> {{registerErrors.password_confirm[0]}} </strong>
      </div>

    <div class="custom-control custom-checkbox">
        <input type="checkbox" 
               class="custom-control-input" 
               id="defaultRegisterFormNewsletter" 
               required>
        <label class="custom-control-label" 
               for="defaultRegisterFormNewsletter">
               I accept terms and conditions
        </label>
    </div>

    <!-- Sign up button -->
    <div class="form-group text-center">
        <button class="btn btn-primary" type="submit">Login</button>
    </div>
</form>

</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            registerErrors: 'registerErrors'
        })
    },
    methods:
    {
        ...mapActions({
            register: 'register'
        }),
        onSubmit() {
            this.register(this.form)
            .then(() => {
                if(!this.registerErrors.email)
                this.$router.push({
                    name: 'login'
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