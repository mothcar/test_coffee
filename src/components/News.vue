<template>
  <v-container fluid grid-list-lg>
    <!--
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
    <div v-for="(value, key) in news">
    <a :href="value.link" target="_blank">
    <v-card>
    <v-card-media :src="value.photo" height="200px">
  </v-card-media>
  <v-card-title primary-title>
  <div>
  <h3 class="headline mb-0">{{ value.title }}</h3>
  <div> {{ value.content }} </div>
  <h5 class="text-xs-right text-sm-right text-lg-right">{{ value.createdAt  | moment("YYYY MMMM Do ") }}</h5>
</div>
</v-card-title>
</v-card>
</a>
<br />
</div>
</v-flex>
</v-layout>
-->

<v-layout row justify-center>
  <v-dialog v-model="dialog" persistent max-width="500px">

    <!-- <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn> -->



    <v-flex slot="activator"  xs12 sm6 offset-sm3>
      <div v-for="(value, key) in news">
        <a :href="value.link" target="_blank">
          <v-card>
            <v-card-media :src="value.photo" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ value.title }}</h3>
                <div> {{ value.content }} </div>
                <h5 class="text-xs-right text-sm-right text-lg-right">{{ value.createdAt  | moment("YYYY MMMM Do ") }}</h5>
              </div>
            </v-card-title>
          </v-card>
        </a>
        <br />
      </div>
    </v-flex>




    <v-card>
      <v-card-title>
        <span class="headline">관리자 로그인</span>
        <span class="content">관리자만 들어갈 수 있습니다. 나가시겠습니까?</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="name" label="Name" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">나가기</v-btn>
        <v-btn color="blue darken-1" flat @click.native="dialog = false" v-on:click.prevent="permission">로그인</v-btn>
      </v-card-actions>
    </v-card>



    <v-btn class="fab-container"
    color="blue"
    dark
    small
    fixed
    bottom
    right
    fab
    slot="activator"
    >
    <v-icon>add</v-icon>
  </v-btn>
</v-dialog>

</v-layout>


</v-container>

</template>

<script>

export default {

  template: '<div> {{ mytime1 }} </div>',

  data: () => ({
    dialog: false,
    news: [],
    mytime: '',
    card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
  }),  // data
  computed: {
    mytime1: function() {
      return 'paultime ' + moment().format('YYYY [escaped] YYYY')
    }
  }, //computed

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
    },

    mytime: function() {

      return moment().format('YYYY [escaped] YYYY')
    },

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
  } // method


}
</script>

<style>
a {
  text-decoration: none;
  color: #42b983;
}

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
