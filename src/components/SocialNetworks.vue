<template>
  <div class="social-networks" id="redes">
    <div class="container">
      <div class="social-networks-content">
        <h4>Las redes que están
          <br>
          <b>
            <span class="green--text">VUEEE</span>-NAZAS!
          </b>
        </h4>
        <div class="social-networks-icons">
          <a href="https://twitter.com/vuecba" target="_blank" class="icon">
            <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
          </a>
          <a href="https://tinyurl.com/vue-cba" target="_blank" class="icon">
            <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'youtube' }"/>
          </a>
          <a href="https://www.instagram.com/vuecba/" target="_blank" class="icon">
            <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
          </a>
          <a href="https://www.twitch.tv/vuecba" target="_blank" class="icon">
            <font-awesome-icon class="icon" :icon="{ prefix: 'fab', iconName: 'twitch' }"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialNetworks",
  data(){
    return{
      text: 'tap me!'
    }
  }
};
</script>

<style lang="sass" scoped>
.social-networks
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  height: 60vh
  padding: 2rem 0
  font-size: 3rem
  color: #474747
  background: rgb(203, 209, 223)
  &-content
    h4
      font-weight: 400
      margin-top: 0
  &-icons
    display: flex
    flex-wrap: wrap
    justify-content: center
    .icon
      color: #474747
      font-size: 5rem
      transition: all .5s ease
      transform: scale(1)
      margin: 0.3rem 4rem
      &:hover
        transform: scale(1.15)
        color: #44AB6F
        cursor: pointer

.green--text
  color: #1abb6d

@media (max-width: 502px)
  .social-networks
    padding: 4rem 0
    height: 70vh
    &-content
      h4
        font-size: 2rem
    &-icons
      font-size: 1rem
      .icon
        margin: 0 .5rem
</style>
