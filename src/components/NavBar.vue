<template>
  <div :class="[open ? 'navbar open': 'navbar']">
    <div class="container">
      <div class="navbar-brand">
        <img src="../assets/logo.png" class="navbar-brand-image" />
      </div>
      <div class="navbar-burger">
        <font-awesome-icon
          :icon="open ? 'times' : 'bars'"
          class="navbar-burger-icon"
          @click="toggleMobileMenu"
        />
      </div>
      <div :class="['navbar-nav' , open ? 'navbar-nav-open': '']">
        <a class="navbar-nav-link" href="#">Calendario</a>
        <a class="navbar-nav-link" href="#">Desafíos</a>
        <a class="navbar-nav-link" href="#">Blog</a>
        <a class="navbar-nav-link" href="#">Contacto</a>
      </div>
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
  display: flex
  align-items: center
  z-index: 1
  top: 0
  left: 0
  background: rgba(248, 248, 248, 1)
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12)
  width: 100%
  height: 100px
  .container
    display: flex
    justify-content: space-between
  &-brand
    &-image
      width: 220px

  &-burger
    display: none

  &-nav
    display: flex
    align-items: center

    &-link
      margin-right: 2rem
      color: #9EA0A2
      font-size: 16px
      -webkit-tap-highlight-color: transparent
      transition: all 500ms ease
    
      &:hover
        color: #44AB6F
        cursor: pointer
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
    &-brand
      &-image
        width: 160px

    &-burger
      display: flex
      justify-content: center
      align-items: center
      &-icon
        font-size: 1.25rem
        opacity: 0.6
    &-nav
      z-index: 0
      display: flex
      flex-direction: column
      align-items: unset
      position: absolute
      width: 100%
      height: calc(#{$vh} - 75px)
      left: 100%
      top: 0
      margin-top: 75px
      padding: 2rem
      background: rgba(68, 171, 111, .95)
      transition: left .5s
      text-align: right
      &-open
        left: 0%
      &-link
        height: 60px
        margin-right: 15%
        justify-content: flex-end
        color: white
        opacity: 0.7
        font-size: 2rem
        font-weight: 300
        transition: all 300ms ease
        &:hover
          color: white
        &:active
          opacity: 1
        &-soon
          opacity: 0.6

</style>



