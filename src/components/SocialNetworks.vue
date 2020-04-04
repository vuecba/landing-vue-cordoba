<template>
  <div class="social-networks">
    <div class="social-networks-container">
      <p>
        Nuestras redes están
        <span class="green--text">VUEEE</span>-NAZAS!
      </p>
      <div class="social-networks-icon-container">
        <font-awesome-icon
          class="social-networks-icon"
          :icon="{ prefix: 'fab', iconName: 'twitter' }"
        />
        <font-awesome-icon
          class="social-networks-icon"
          :icon="{ prefix: 'fab', iconName: 'instagram' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialNetworks"
};
</script>

<style lang="sass" scoped>
.social-networks
  display: flex
  align-items: center
  justify-content: center
  height: 100vh
  font-size: 3rem
  background: linear-gradient(0deg, rgba(68, 171, 111, .8), rgba(68, 171, 111, .0))
  &-icon
    color: black
    font-size: 5rem
    transition: transform .5s
    transform: scale(1)
    &-container
      margin-top: 50px
      display: flex
      justify-content: space-around
    &:hover
      transform: scale(1.15)
      color: #44AB6F
      cursor: pointer

  &-container
    display: block

.green--text
  color: #44AB6F
</style>