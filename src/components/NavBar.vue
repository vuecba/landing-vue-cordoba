<template>
  <div class="navbar">
    <div class="navbar-brand">
      <img src="../assets/logo.png" class="navbar-brand-image">
    </div>
    <div class="navbar-burger">
      <font-awesome-icon
        :icon="open ? 'times' : 'bars'"
        class="navbar-burger-icon"
        @click="toggleMobileMenu"
      />
    </div>
    <div :class="['navbar-nav' , open ? 'navbar-nav-open': '']">
      <div class="navbar-nav-link" href>
        <div class="navbar-nav-link-live"/>
        <span>En vivo</span>
      </div>
      <div class="navbar-nav-link" href>Calendario</div>
      <div class="navbar-nav-link" href>Desafíos</div>
      <div class="navbar-nav-link" href>Blog</div>
      <div class="navbar-nav-link" href>Contacto</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.open = !this.open;
    }
  },
  mounted() {}
};
</script>

<style lang="sass" scoped>

$vh: 100vh;

.navbar
  position: fixed
  z-index: 1
  top: 0
  background: rgba(248, 248, 248, 1)
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12)
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

  &-burger
    display: none

  &-nav
    width: 35%
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

      &-live
        background: red
        width: 10px
        height: 10px
        border-radius: 10px
        margin-right: 5px
        animation: .3s ease-in-out both live;

      &-soon
        display: flex
        justify-content: center
        align-items: center
        margin-left: 5px
        font-size: 15px
        width: 30px
        height: 30px
        border-radius: 15px
        color: white
        background: #44AB6F


@media (max-width: 502px)
  .navbar
    height: 75px
    display: flex
    justify-content: space-between
    &-brand
      &-image
        margin-left: 15%
        max-height: 25px

    &-burger
      display: flex
      justify-content: center
      align-items: center

      &-icon
        /* margin-right: 15% */

    &-nav
      z-index: 0
      display: block
      position: absolute
      width: 100%
      height: calc(#{$vh} - 75px)
      right: -110%
      margin-top: 75px
      padding-top: 30px
      background: rgba(68, 171, 111, .9)
      transition: right .5s
      &-open
        right: -5%
      &-link
        height: 60px
        margin-right: 15%
        justify-content: flex-end
        color: white
        &:hover
          color: white
        &-soon
          position:relative
          margin-left: 10px
          display: flex
          justify-content: center
          align-items: center
          font-size: 15px
          width: 30px
          height: 30px
          border-radius: 15px
          color: #44AB6F
          background: white

@keyframes live
  0% 
    background: red
  100% 
    background: grey
</style>



