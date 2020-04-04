<template>
  <div class="friends">
    <div class="friends-container">
      <div class="friends-text">
        <p>Nuestros amigos</p>
      </div>
      <div class="friends-logos">
        <img class="friends-logos-image" src="../assets/codear.png">
        <img class="friends-logos-image" src="../assets/vuemastery.png">
      </div>
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
  width: 100%
  &-container
    width: 100%
  &-text
    width: 100%
    text-align: center
    font-size: 4rem
  &-logos
    font-size: 5rem
    width: 100%
    display: flex
    justify-content: space-around
    &-image
      max-width: 300px
      transform: scale(1)
      transition: .5s transform
      &:hover
        transform: scale(1.1)
        cursor: pointer

</style>

