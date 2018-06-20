<template>
  <div id="container">


    <iframe id="myframe" :src="this.url1" frameborder="0" ref="frame" @load="load"></iframe>


  </div>
</template>


<script>

export default {
  data () {
    return {
      url1: "http://mothcar.blogspot.com/2017/06/blog-post.html",
      url2: "https://blog.naver.com/mothcar/221082122469",
      url3: "http://www.bitweb.co.kr/news/view.php?idx=1182"
    }
  }, // data

  methods: {
    load: function () {

      // iframe load
      // this.iframe.loaded = true;
      // this.url = "https://blog.naver.com/mothcar/221082122469"

      // first try
      // var element = document.querySelector('meta[property="og:image"]')

      // Sencond try
      /*

      var hostdomain = "http://www.bitweb.co.kr/news/view.php?idx=1182"

      location.hostdomain

      var metas = document.getElementsByTagName('meta');

      for (var i=0; i<metas.length; i++) {
        if (metas[i].getAttribute("property") == "video") {
           return metas[i].getAttribute("content");
         }
      }
      console.log('Domian : '+location.hostdomain)
      console.log('New Element : '+JSON.stringify(metas[0]))

      return "";
      */


      // Third way

      function makeHttpObject() {
        try {return new XMLHttpRequest();}
        catch (error) {}
        try {return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (error) {}
        try {return new ActiveXObject("Microsoft.XMLHTTP");}
        catch (error) {}

        throw new Error("Could not create HTTP request object.");
      }
      var request = makeHttpObject();
      request.open("GET", "http://www.bitweb.co.kr/news/view.php?idx=1182", false);
      request.setRequestHeader('Access-Control-Allow-Headers', '*');
      request.setRequestHeader('Content-type', 'application/ecmascript');
      request.setRequestHeader('Access-Control-Allow-Origin', '*');
      request.send(null);
      request.onreadystatechange = function() {
        if (request.readyState == 4)
          alert(request.responseText);
      };




    }
  }
} //export
</script>

<style>
iframe {
  position: fixed;
  /* top: 10vh; */
  width: 100vw;
  height: 90vh;
}
</style>
