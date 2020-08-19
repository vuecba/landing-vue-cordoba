<template>
  <div :class="[openMenu ? 'navbar open' : 'navbar']">
    <div class="container">
      <div class="navbar-brand" @click="closeMobileMenu('#')">
        <img src="../assets/logo.png" class="navbar-brand-image">
      </div>
      <div class="navbar-burger">
        <font-awesome-icon
          :icon="openMenu ? 'times' : 'bars'"
          class="navbar-burger-icon"
          @click="toggleMobileMenu"
        />
      </div>
      <div :class="['navbar-nav', openMenu ? 'navbar-nav-open' : '']">
        <!--<a class="navbar-nav-link live" target="_blank" href="https://www.twitch.tv/vuecba">
          <div class="navbar-nav-link-live"></div>En vivo
        </a>-->
        <!--<a class="navbar-nav-link" @click="closeMobileMenu('#merchandising')">Merchandising</a>-->
        <a class="navbar-nav-link" @click="closeMobileMenu('#amigos')">Amigos</a>
        <a class="navbar-nav-link" @click="closeMobileMenu('#redes')">Redes</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
    openMenu:Boolean,
  },
  methods: {
    toggleMobileMenu() {
      this.$emit('update:openMenu',!this.openMenu)
    },
    closeMobileMenu(link) {
      this.$emit('update:openMenu',false)
      window.location.href = link;
    }
  },
};
</script>

<style lang="sass" scoped>

$vh: 100vh

.live
  display: flex

.navbar
  position: fixed
  display: flex
  align-items: center
  z-index: 20
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
    cursor: pointer
    &-image
      width: 220px

  &-burger
    display: none

  &-nav
    display: flex
    align-items: center

    &-soon
        opacity: 0.4
        margin-right: 2rem
        color: #9EA0A2
        font-size: 16px
        -webkit-tap-highlight-color: transparent
        transition: all 500ms ease

        &:hover
          color: #44AB6F
          cursor: not-allowed

    &-link
      margin-right: 2rem
      color: #9EA0A2
      font-size: 16px
      -webkit-tap-highlight-color: transparent
      transition: all 500ms ease
      

      &:hover
        color: #44AB6F
        cursor: pointer

      &-live
        background: red
        width: 10px
        height: 10px
        border-radius: 10px
        margin-right: 5px
        animation: 1s ease-in-out infinite live


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
</style>
