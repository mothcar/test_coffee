<template>
  <v-app>
    <!-- whole Tool Bar **************************************** -->
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-btn icon>
        <v-icon>menu</v-icon>
      </v-btn>
      <router-link to="/">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <!-- <router-link to="/edit">Edit</router-link> -->
    </v-toolbar>


    <v-content>
      <router-view/>
    </v-content>


    <v-footer :fixed="fixed" app>
      <div class="container">
        <span>&copy; 2017</span>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
a {
    text-decoration: none;
    color: #888
    }

</style>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '38Coin Community'
    }
  },
  name: 'App'
}
</script>
