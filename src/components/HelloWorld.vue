<template>
  <v-container fluid grid-list-lg>
  <!-- <v-flex xs12 sm12 md12> -->
    <!-- <v-slide-y-transition mode="out-in"> -->
      <!-- <v-layout fluid> -->
      <!-- <div class="container"> -->
        <v-data-table
        :headers="headers"
        :items="coins"
        hide-actions
        class="elevation-3"
        >
        <template slot="items" slot-scope="props">
          <td class="px-2"><a :href="props.item.url">{{ props.item.name }}</a></td>
          <td class="text-xs-right xs3">{{ props.item.price }}</td>
          <td class="text-xs-right xs3">{{ props.item.price }}</td>
          <td class="text-xs-right xs3">{{ props.item.price }}</td>
          <td class="text-xs-right xs3">{{ props.item.price }}</td>
        </template>
      </v-data-table>




        <!-- <v-layout column class="fab-container"> -->
    <v-card>
      <!-- <v-toolbar extended> -->
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-btn
          color="pink"
          dark
          small
          absolute
          bottom
          right
          fab
          :to="{ name: 'edit', params: {} }"
        >
          <v-icon>add</v-icon>
        </v-btn>
      <!-- </v-toolbar> -->
      <!-- <v-card-text style="height: 236px;" class="grey lighten-5"></v-card-text> -->
      <!-- <v-card-text style="height: 100px; position: relative"></v-card-text> -->
    </v-card>
  <!-- </v-layout> -->
  <!-- </v-flex> -->




      <!-- </div> -->


    <!-- </v-layout> -->
  <!-- </v-slide-y-transition> -->
</v-container>
</template>

<script>
export default {

  data () {
    return {
      // rows-per-page-items : [5],
      pagination: {
        sortBy: 'name'
      },
      currency_symbols : {
        'USD': '$', // US Dollar
        'EUR': '€', // Euro
        'CRC': '₡', // Costa Rican Colón
        'GBP': '£', // British Pound Sterling
        'ILS': '₪', // Israeli New Sheqel
        'INR': '₹', // Indian Rupee
        'JPY': '¥', // Japanese Yen
        'KRW': '₩', // South Korean Won
        'NGN': '₦', // Nigerian Naira
        'PHP': '₱', // Philippine Peso
        'PLN': 'zł', // Polish Zloty
        'PYG': '₲', // Paraguayan Guarani
        'THB': '฿', // Thai Baht
        'UAH': '₴', // Ukrainian Hryvnia
        'VND': '₫', // Vietnamese Dong
      },
      headers: [
        {
          text: 'Coin',
          align: 'left',
          sortable: true,
          value: 'name',
          // width: '100%';
        },
        { text: '희망가격 (₩)', value: 'price' },
        { text: 'Compared (%)', value: 'fat' },
        { text: '수량', value: 'carbs' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      coins: []
    }


  },  // data
  created:function() {

    fetch('http://119.205.233.249:1337/getdata')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.coins = res;
    })

    // axios.get('http://119.205.233.249:1337/getdata')
    // .then(res => {
    //   console.log(res.data)
    //   this.coins = res.data;
    // })

  } // fn create


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: #42b983;
}
v-data-table {
  /* overflow: scroll; */
}

.fab-container {
  /* position: fixed; */
  margin-top: 15px;
  bottom: 0;
  right: 0;
}

</style>
