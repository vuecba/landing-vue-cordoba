<template>
  <div class="navbar">
    <div class="navbar-brand">
      <img src="../assets/logo.png" class="navbar-brand-image">
    </div>
    <div class="navbar-nav">
      <div class="navbar-nav-link" href>Calendario</div>
      <div class="navbar-nav-link" href>Desafíos</div>
      <div class="navbar-nav-link" href>Blog</div>
      <div class="navbar-nav-link" href>Contacto</div>
    </div>
  </div>
</template>

<script>
// TEST

export default {
  name: "NavBar",
  props: {}
};
</script>

<style lang="sass" scoped>

.navbar
  position: fixed
  z-index: 1
  top: 0
  background: rgba(255,255,255,.9)
  width: 100%
  height: 100px
  display: flex
  justify-content: space-between
  &-brand
    width: 25%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    &-image
      max-height: 32px
      margin: auto

  &-nav
    width: 25%
    margin-right: 5%
    height: 100%
    display: flex
    justify-content: space-between

    &-link
      width: auto
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      color: #9EA0A2
      font-size: 17px
    
      &:hover
        color: #44AB6F
        cursor: pointer
    
</style>



