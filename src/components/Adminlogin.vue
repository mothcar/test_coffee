<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <button type="submit" class="btn btn-default" v-on:click.prevent="permission">CHECK PERMISSION</button>
  </v-form>



</template>

<script>
export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }), // data

    methods: {
      permission: function() {
        axios.post('http://119.205.233.249:1337/permission', {
          name: this.name,
          email: this.email
        })
        .then(response => {
          console.log(JSON.stringify(response))
          if(response.data.permission === "ok") return this.$router.push({ name: 'createpost', query: { redirect: '/createpost' } })
          return this.$refs.form.reset()
        })


      } //permissoin
    } // methods
  }
</script>

<style></style>
