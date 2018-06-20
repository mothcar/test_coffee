<template>
  <v-container fluid grid-list-lg>

    <v-layout>
    <v-flex xs12 sm6 offset-sm3>

      <!--
      <v-card >
        <v-card-media src="https://cdn.shopify.com/s/files/1/1217/3064/products/CL022-Sunset_Dock_Final_1024x1024.jpg?v=1474406979" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <v-card-text> {{ card_text}} </v-card-text>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
      <br />

      <v-card>
        <v-card-media src="https://freerangestock.com/sample/39591/a-romantic-couple-enjoying-the-sunset-in-a-tropical-island.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div> {{ card_text}} </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
      -->

      <div v-for="(value, key) in news">
        <v-card>
          <v-card-media :src="value.photo" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ value.title }}</h3>
              <div> {{ value.content }} </div>
              <h6 class="headline mb-0">{{ value.createdAt }}</h6>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
        {{ value.photo }}
        <br />
      </div>

    </v-flex>
  </v-layout>


<!-- https://freerangestock.com/sample/39591/a-romantic-couple-enjoying-the-sunset-in-a-tropical-island.jpg -->

    <v-btn class="fab-container"
    color="blue"
    dark
    small
    fixed
    bottom
    right
    fab
    :to="{ name: 'admin', params: {} }"
    >
    <v-icon>add</v-icon>
  </v-btn>


  </v-container>

</template>

<script>
import axios from 'axios'

export default {

  data: () => ({
    news: [],
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
  }),  // data
  created:function() {

    fetch('http://119.205.233.249:1337/getnews')
    .then(res => res.json())
    .then(res => {
      console.log(res[0])
      this.news = res;
    })

    // axios.get('http://119.205.233.249:1337/getdata')
    // .then(res => {
    //   console.log(res.data)
    //   this.coins = res.data;
    // })

  }, // fn create

  methods: {
    url: function(id){
      return "http://" + id
    }
  } // method
}
</script>

<style>
.fab-container {
  /* position: fixed; */
}
.fab-container {
  /* position: fixed; */
  margin-bottom: 40px;
  margin-right: 7px;
  bottom: 0;
  right: 0;
}
</style>


<!-- <v-container  fluid text-xs-center>

  <v-layout >
  <v-flex xs12 sm6 >
    <v-card :light="true" :ripple="true" width="100%"> -->
