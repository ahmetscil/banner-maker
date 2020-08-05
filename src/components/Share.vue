<template>
  <div>
    <transition name="bounce">
      <section class="selectedBanner" v-if="sdisplay">
        <div class="close" @click="closeThis"><i class="fa fa-times"></i></div>
        <div class="bannerShare">
          <div class="sbanner sbanner1">
            <h1>{{stitle}}</h1>
            <p>{{scontent}}</p>
            <span>{{sprice}}</span>
            <img :src="sphoto" :alt="stitle">
          </div>
          <i class="fa fa-globe"></i> {{slink}}
        </div>
        <div class="clearfix"></div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Share',
  props: [
    "stitle",
    "scontent",
    "sphoto",
    "sprice",
    "slink",
    "sdisplay"
  ],
  data() {
    return {
      bannerphoto: 'https://s3.eu-west-2.amazonaws.com/boltcdn/img/previmg.jpg'
    }
  },
  methods: {
    changePhoto(e) {
      const file = e.target.files[0];
      this.bannerphoto = URL.createObjectURL(file);
    },
    selectPhoto() {
      document.getElementById('uploadPhoto').click()
    },
    closeThis() {
      this.sdisplay = false
    }

    
  }
}
</script>
<style lang="sass" scope>
  .selectedBanner
    position: fixed
    right: 0px
    top: 0px
    width: 530px
    height: 100vh
    z-index: 9999999
    background: #fff
    box-shadow: 0 0 10px #000
    padding: 15px
    .close
      position: absolute
      left: -35px
      top: 5px
      background: #fff
      z-index: 9999999
      width: 30px
      height: 30px
      text-align: center
      padding-top: 4px
      opacity: 1 !important
      border-radius: 30px
  .bannerShare
    display: inline-block
    margin: 25px 0px
    width: 500px
    height: 500px
    box-shadow: none
    border-radius: 0px
    transition: .3s
    .sbanner
      position: relative
      width: 500px
      height: 500px
      overflow: hidden
      & img
        min-width: 100%
        min-height: 500px
    .sbanner1
      & h1
        position: absolute
        top: 20px
        left: 10px
        z-index: 1
        font-size: 40px
        color: #fff
      & p
        position: absolute
        top: 70px
        left: 10px
        z-index: 1
        font-size: 24px
        color: #fff
      & span
        position: absolute
        background: #fff
        color: #000
        bottom: 10px
        width: 100%
        z-index: 1
        text-align: center
        font-size: 20px
</style>
