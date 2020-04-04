<template>
  <div class="friends" id="amigos">
    <div class="container">
      <h3 class="friends-text">Nuestros <b>amigos</b></h3>
      <div class="friends-logos">
        <img class="friends-logos-image" src="../assets/codear.png" />
        <img
          class="friends-logos-image optical-correction"
          src="../assets/vuemastery.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Friends",
};
</script>

<style lang="sass" scoped>
.friends
  display: flex
  align-items: center
  justify-content: center
  height: 80vh
  width: 100%
  margin-bottom: 4rem
  text-align: center
  &-text
    font-size: 3.5rem
    font-weight: 400
    opacity: 0.6
    margin-bottom: 4rem
  &-logos
    font-size: 5rem
    width: 90%
    margin: 0 auto
    display: flex
    justify-content: space-around
    &-image
      height: 51px
      transform: scale(1)
      transition: .5s transform
      &:hover
        transform: scale(1.1)
        cursor: pointer
      &.optical-correction
        height: 45px

@media (max-width: 502px)
  .friends
    &-logos
      flex-direction: column
      &-image
        width: 70%
        height: 100%
        margin: 1rem auto
</style>
