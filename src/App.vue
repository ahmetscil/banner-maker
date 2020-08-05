<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'app'
}
</script>
<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  let csses, jses,i,j
  export default {
    name: 'app',
    data() {
      return {
        loader: true,
        settings: [],
        errors: []
      }
    },
    computed: {
      ...mapState(['apiURL'])
    },
    created() {
      axios.get(this.apiURL + `site&get`)
        .then(response => {
          this.settings = response.data
          this.loader = false
          document.title = this.settings[0].title
          csses = this.settings[0].css.split(" ")
          jses = this.settings[0].js.split(" ")
          for (i = 0; i < csses.length; i++) { 
            var css=document.createElement("link");
            css.setAttribute("rel", "stylesheet")
            css.setAttribute("type", "text/css")
            css.setAttribute("href", csses[i])
            document.head.appendChild(css);
          }
          for (j = 0; j < jses.length; j++) { 
            var js = document.createElement('script');
            js.src = jses[j];
            document.getElementsByTagName('footer')[0].appendChild(js);
          }
          $('meta[name=description]').attr('content', this.settings[0].desc);
          $('meta[name=keywords]').attr('content', this.settings[0].keys);
          $('meta[name=keywords]').attr('content', this.settings[0].keys);
            var favicon=document.createElement("link");
            favicon.setAttribute("rel", "icon")
            favicon.setAttribute("href", this.settings[0].favicon)
            document.head.appendChild(favicon);
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    watch: {
      "$route" () {
        axios.get(this.apiURL + `site&get`)
          .then(response => {
            this.navlinks = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>
