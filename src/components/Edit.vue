<template>
  <v-container fluid grid-list-lg>
  <!-- <div class="container"> -->
    <v-form v-model="valid">
      <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="코인이름"
      required
      ></v-text-field>

      <v-text-field
      v-model="price"
      label="희망판매가격"
      ></v-text-field>

      <v-text-field
      v-model="quantity"
      label="수량"
      ></v-text-field>

      <v-text-field
      v-model="phone"
      label="연락처"
      ></v-text-field>

      <v-text-field
      v-model="url_address"
      label="코인사이트주소"
      ></v-text-field>

      <button type="submit" class="btn btn-default" v-on:click.prevent="order">Add</button>
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
    price: '',
    quantity: '',
    phone: '',
    url_address: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    content: ''
  }),

  methods: {
    order () {
      // console.log(this.name)
      axios.post('http://119.205.233.249:1337/testinput', {
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        phone: this.phone,
        url: this.url_address

      })
      .then(response => {
        this.$router.push({ name: 'home', query: { redirect: '/' } })
      }

    )
  } //addJob()
}
}
</script>
