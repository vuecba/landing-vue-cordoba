<template>
  <div id="app" v-touch:swipe.left="()=>openMenuFunction()" v-touch:swipe.right="()=>closeMenuFunction()">
    <NavBar :openMenu.sync="openMenu"></NavBar>
    <Presentation></Presentation>
    <!--<Challenges></Challenges>-->
    <!--<VueEvents></VueEvents>-->
    <!--<Merchandising id="merchandising"></Merchandising>-->
    <Friends></Friends>
    <SocialNetworks></SocialNetworks>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
// import Challenges from "./components/Challenges";
import Friends from "./components/Friends";
import SocialNetworks from "./components/SocialNetworks";
// import Merchandising from "./components/Merchandising"
// import VueEvents from "./components/VueEvents";

export default {
  name: "App",
  components: {
    NavBar,
    Presentation,
    // Challenges,
    //Merchandising,
    Friends,
    SocialNetworks,
    // VueEvents
  },
  data(){
    return {
      openMenu: false,
    }
  },
  methods:{
    openMenuFunction(){
      this.openMenu = true
    },
    closeMenuFunction(){
      this.openMenu = false
    }
  }
};
</script>

<style lang="sass">

body
  padding: 0
  margin: 0
  width: 100%
  font-family: 'Roboto', sans-serif

a
  text-decoration: none

#app
  margin: 0
  z-index: 15

.container
  max-width: 1180px
  width: 100%
  margin: 0 auto

.d-flex
  display: flex

.green
  color: #009d51

.w-100
  width: 100%

.h-100
  height: 100%

.p-relative
  position: relative

.button
  margin-right: 2rem
  font-size: 1.125rem
  letter-spacing: 0.25px
  padding: 0.5rem 2rem
  border-radius: 5px
  transition: all 400ms ease
  &:hover
    cursor: pointer
    transform: translateY(-0.25rem)
  &:focus
    outline: none
  &:active
    transform: translateY(-0.25rem) scale(1.05)
  &-primary
    background: #1ABB6D
    color: #ffffff
    border: 2px solid #3BEC96
    box-shadow: 0px 11px 25px -12px #3BEC96, 0px 7px 15px -12px #3BEC96
    &:active
      box-shadow: 0px 22px 35px -14px #3BEC96, 0px 7px 15px -12px #3BEC96
  &-secondary
    background: #2B425A
    color: #ffffff
    border: 2px solid #ffffff
    box-shadow: 0px 11px 25px -12px #477FB7, 0px 7px 15px -12px #477FB7
    &:active
      box-shadow: 0px 22px 35px -14px #477FB7, 0px 7px 15px -12px #477FB7

@media (max-width: 502px)
  .container
    max-width: 90%
</style>
