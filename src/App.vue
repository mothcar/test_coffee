<template>
  <v-app>
    <!-- whole Tool Bar **************************************** -->
    <!-- TOOLBAR ********************************** -->
    <v-toolbar
    app
    :clipped-left="clipped"
    >
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    <!-- <v-btn icon>
    <v-icon>menu</v-icon>
  </v-btn> -->
  <router-link to="/">
    <v-toolbar-title v-text="title"></v-toolbar-title>
  </router-link>

  <v-spacer></v-spacer>
  <!-- <router-link to="/edit">Edit</router-link> -->
  <v-btn icon @click.stop="rightDrawer = !rightDrawer">
    <v-icon>menu</v-icon>
  </v-btn>

</v-toolbar>
<!-- TOOLBAR ********************************** -->


<!-- CONTENT ********************************** -->
<v-content>
  <router-view/>
</v-content>
<!-- CONTENT ********************************** -->

<!-- RIGHT MENU ********************************** -->
<v-navigation-drawer
temporary
:right="right"
v-model="rightDrawer"
fixed
app
>
<v-list>

  <v-list-tile @click="rightDrawer = !rightDrawer" :to="{ name: 'home', params: {} }">
    <v-list-tile-action>
      <v-icon>home</v-icon>
    </v-list-tile-action>
    <v-list-tile-title>Home</v-list-tile-title>
  </v-list-tile>

  <v-list-tile @click="rightDrawer = !rightDrawer" :to="{ name: 'login', params: {} }">
    <v-list-tile-action>
      <v-icon>perm_identity</v-icon>
    </v-list-tile-action>
    <v-list-tile-title>로그인</v-list-tile-title>
  </v-list-tile>

  <v-list-tile @click="rightDrawer = !rightDrawer" :to="{ name: 'news', params: {} }">
    <v-list-tile-action>
      <v-icon>subject</v-icon>
    </v-list-tile-action>
    <v-list-tile-title>컬럼</v-list-tile-title>
  </v-list-tile>

  <v-list-tile class="text-md-center" @click="rightDrawer = !rightDrawer">
    <v-list-tile-action>
      <v-icon>clear</v-icon>
    </v-list-tile-action>
    <v-list-tile-title>CLOSE</v-list-tile-title>
  </v-list-tile>

</v-list>
</v-navigation-drawer>
<!-- RIGHT MENU ********************************** -->

<!-- FOOTER ************************************** -->
<v-footer :fixed="fixed" app>
  <div class="container">
    <span>&copy; 2017</span>
  </div>
</v-footer>
<!-- FOOTER ************************************** -->
<v-btn  class="fab-container"
  color="pink"
  dark
  small
  fixed
  bottom
  right
  fab
  :to="{ name: 'edit', params: {} }"
  >
    <v-icon>add</v-icon>
</v-btn>

</v-app>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #888
}

.fab-container {
  /* position: fixed; */
  margin-bottom: 40px;
  margin-right: 7px;
  bottom: 0;
  right: 0;
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
