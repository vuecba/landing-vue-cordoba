<template>
  <div class="friends">
    <div class="friends-text">
      <p>Nuestros amigos</p>
    </div>
    <div class="friends-logos">
      <img class="friends-logos-image" src="../assets/codear.png">
      <img class="friends-logos-image" src="../assets/vuemastery.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "Friends"
};
</script>

<style lang="sass" scoped>
.friends
  display: flex
  align-items: center
  justify-content: center
  height: 100vh
  &-text
    width: 100%
    font-size: 5rem
    padding: 10%
  &-logos
    font-size: 5rem
    width: 100%
    &-image
      max-width: 50%

</style>

