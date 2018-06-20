<template>
  <v-container fluid grid-list-lg>
    <!-- <div class="container"> -->
    <h1>Create Post</h1>

    <v-form v-model="valid">
      <v-text-field
      v-model="title"
      :counter="10"
      label="제목"
      required
      ></v-text-field>

      <v-text-field
      v-model="content"
      label="내용"
      ></v-text-field>

      <v-text-field
      v-model="photo"
      label="Photo"
      ></v-text-field>

      <v-text-field
      v-model="link"
      label="Link Address"
      ></v-text-field>


      <button type="submit" class="btn btn-default" v-on:click.prevent="post_news">Add News</button>
    </v-form>

  </v-container>

</template>

<script>

export default {
  props: {
  },

  data: () => ({
    valid: false,
    title: '',
    content: '',
    photo: '',
    link: ''
  }),

  methods: {
    post_news () {
      // console.log(this.name)
      axios.post('http://119.205.233.249:1337/postnews', {
        title: this.title,
        content: this.content,
        photo: this.photo,
        link: this.link

      })
      .then(response => {
        this.$router.push({ name: 'news', query: { redirect: '/news' } })
      }

    )
  } //addJob()
}
}
</script>
