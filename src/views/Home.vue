<template>
  <div>
    <section>
      <div class="welcome">
        <h1>Why do we use it?</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <!-- <a href="#">start</a> -->
      </div>
    </section>
    <Maker></Maker>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style lang="sass">
  .welcome
    width: 100vw
    background: linear-gradient(45deg, #7dacff, #173971)
    padding: 1% 15%
    text-align: center
    & h1
      font-family: 'Srisakdi', cursive
      color: #fff
      font-weight: lighter
      font-size: 50px
    & p
      font-family: 'Thasadith', sans-serif
      color: #fff
      font-weight: lighter
      letter-spacing: 0.2em
      line-height: 30px
      font-size: 20px
      margin: 30px 0 50px 0
    & a
      border: 1px #fff solid
      border-radius: 5px
      color: #fff
      font-size: 24px
      padding: 10px 40px
      font-family: 'Srisakdi', cursive
      transition: 0.3s
      background: none
      &:hover
        text-decoration: none
        background: #fff
        color: #000
        transition: 0.3s
</style>
