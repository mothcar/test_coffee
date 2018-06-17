<template>
  <div id="container">


    <iframe id="myframe" :src="this.url" frameborder="0" ref="frame" @load="load"></iframe>


  </div>
</template>


<script>

export default {
  data () {
    return {
      url: "http://mothcar.blogspot.com/2017/06/blog-post.html",
      url2: "https://blog.naver.com/mothcar/221082122469"
    }
  }, // data

  methods: {
    load: function () {
      // this.iframe.loaded = true;
      // this.url = "https://blog.naver.com/mothcar/221082122469"

    }
  }
} //export
</script>

<style>
iframe {
  position: fixed;
  top: 10vh;
  width: 100vw;
  height: 90vh;
}
</style>
