<template>
   <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="user@nigerian.system ..." />

      <br>

      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="**********" />
      
       <br>

      <button
         @onclick="register">
	 Register
	</button>
   </div>
</template>
<script>
import AuthenticationServce from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc123',
      password: 'abc123'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
