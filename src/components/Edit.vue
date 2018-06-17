<template>
  <v-container fluid grid-list-lg>
  <!-- <div class="container"> -->
    <v-form v-model="valid">
      <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="이름"
      required
      ></v-text-field>

      <v-text-field
      v-model="content"
      label="내용"
      ></v-text-field>
      <button type="submit" class="btn btn-default" v-on:click.prevent="addJob">Add</button>
    </v-form>
  <!-- </div> -->
</v-container>

</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    content: ''
  }),

  methods: {
    addJob () {
      // console.log(this.name)
      axios.post('http://119.205.233.249:1337/testinput', {
        name: this.name,
        content: this.content
      })
      .then(response => {
        this.$router.push({ name: 'home', query: { redirect: '/' } })
      }

    )
  } //addJob()
}
}
</script>
