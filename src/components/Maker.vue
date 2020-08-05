<template>
  <div>
    <header>
      <form>
        <input type="text" v-model="bannertitle">
        <input type="text" name="url" v-model="bannerurl">
        <input type="text" name="content" v-model="bannercontent">
        <input type="text" name="price" v-model="bannerprice">
        <button type="button" v-on:click="selectPhoto">
          <i class="fa fa-photo fa-2x"></i>
        </button>  
        <div class="hide">
          <input type="file" id="uploadPhoto" name="photo" v-on:change="changePhoto">
        </div>
      </form>
    </header>
    <section class="bannerArea">
      <div class="banners" v-for="n in 18" :key="n">
        <div class="banner " :class="'banner'+n">
          <h1>{{bannertitle}}</h1>
          <p>{{bannercontent}}</p>
          <span>{{bannerprice}}</span>
          <img :src="bannerphoto" :alt="bannertitle">
        </div>
        <div class="buttons">
          <button type="button" class="actionButton">
            <i class="fa fa-download"></i>
          </button>
          <button type="button" class="actionButton" @click="shareThis">
            <i class="fa fa-facebook"></i>
          </button>
          <button type="button" class="actionButton">
            <i class="fa fa-twitter"></i>
          </button>
          <button type="button" class="actionButton">
            <i class="fa fa-linkedin"></i>
          </button>
        </div>
      </div>
    </section>
    <Share
      :sdisplay="shareButton"
      :stitle="bannertitle" 
      :scontent="bannercontent"
      :sprice="bannerprice"
      :sphoto="bannerphoto"
      :slink="bannerurl"></Share>

  </div>
</template>

<script>
export default {
  name: 'Maker',
  data() {
    return {
      shareButton: false,
      bannertitle: 'title',
      bannercontent: 'content',
      bannerprice: 'price',
      bannerurl: 'url',
      bannerphoto: 'https://s3.eu-west-2.amazonaws.com/boltcdn/img/previmg.jpg'
    }
  },
  methods: {
    changePhoto(e) {
      const file = e.target.files[0];
      this.bannerphoto = URL.createObjectURL(file);
    },
    selectPhoto(e) {
      document.getElementById('uploadPhoto').click()
    },
    shareThis() {
      this.shareButton = true
    }

    
  }
}
</script>
<style lang="sass">
  header
    margin: auto
    background: linear-gradient(45deg, #000, #333)
    padding: 50px 10px
    font-size: 12px !important
    z-index: 99
    text-align: center
    & input
      font-family: 'Thasadith', sans-serif
      font-size: 20px !important
      font-weight: lighter
      background: none
      border-bottom: 1px #ffffff54 solid !important
      padding: 0px 0 15px 0
      border-top: none
      border-left: none
      border-right: none
      color: #fff
      margin-right: 15px
    & button
      background: none
      color: #fff
      padding: 0px !important
      margin: 0px !important
  .bannerArea
    background: linear-gradient(45deg, #7dacff, #000)
  .banners
    display: inline-block
    margin: 25px 50px
    width: 250px
    height: 290px
    box-shadow: 0 0 10px #333
    border-radius: 5px
    transition: .3s
    &:hover
      box-shadow: 0 0 30px #000
      transition: .3s
    .buttons
      display: block
      margin-top: 3px
      .actionButton
        padding: 5px 10px
        width: 22.5%
        margin: 1%
        background: none
        color: #fff
        border-radius: 2px
        &:hover
          background: #fff
          color: #173971
    .banner 
      position: relative
      width: 250px
      height: 250px
      overflow: hidden
      & img
        min-width: 100%
        min-height: 250px
    .banner1,
    .banner3,
    .banner5,
    .banner7,
    .banner9,
    .banner11,
    .banner13,
    .banner15,
    .banner17
      & h1
        position: absolute
        top: 10px
        left: 10px
        z-index: 1
        font-size: 20px
      & p
        position: absolute
        top: 50px
        left: 10px
        z-index: 1
        font-size: 14px
      & span
        position: absolute
        background: #fff
        color: #000
        bottom: 10px
        width: 100%
        z-index: 1
        text-align: center
        font-size: 20px
    .banner2,
    .banner4,
    .banner6,
    .banner8,
    .banner10,
    .banner12,
    .banner14,
    .banner16,
    .banner18
      & h1
        position: absolute
        bottom: 10px
        right: 10px
        z-index: 1
        color: #fff
        text-shadow: 0 0 10px #000
      & p
        position: absolute
        bottom: 50px
        right: 10px
        z-index: 1
        color: #fff
        text-shadow: 0 0 10px #000
      & span
        position: absolute
        background: #fff
        color: #000
        top: 10px
        width: 100%
        z-index: 1
        text-align: center
    .banner3

</style>
