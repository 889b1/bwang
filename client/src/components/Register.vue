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

      <buttonRegister</button>
 </div>

</template>

<script>
export default {
  data () {
    return {
      email: 'user@nigerian.system',
      password: '*******'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed value', value)
    }
  },
  mounted () {
    setTimeout(function () {
      this.email = 'hello world'
    }, 20000)
  }
}

</script>
\
<style scoped>

</style>
