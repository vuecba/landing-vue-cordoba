<template>
  <div id="app">
    <NavBar></NavBar>
    <Presentation></Presentation>
    <!--<Challenges></Challenges>-->
    <!--<VueEvents></VueEvents>-->
    <Friends></Friends>
    <SocialNetworks></SocialNetworks>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Challenges from "./components/Challenges";
import Friends from "./components/Friends";
import SocialNetworks from "./components/SocialNetworks";
import VueEvents from "./components/VueEvents";

export default {
  name: "App",
  components: {
    NavBar,
    Presentation,
    Challenges,
    Friends,
    SocialNetworks,
    VueEvents
  }
};
</script>

<style lang="sass">

body
  padding: 0
  margin: 0
  width: 100%
  font-family: 'Open Sans', sans-serif;

#app
 font
 margin: 0


</style>

