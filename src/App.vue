<template>
  <div id="app">
    <NavBar></NavBar>
    <Presentation></Presentation>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";

export default {
  name: "App",
  components: {
    NavBar,
    Presentation
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

