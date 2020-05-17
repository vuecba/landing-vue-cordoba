<template>
  <div class="merchandising">
    <div class="container d-flex">
        <div class="merchandising-polaroids">
            <Polaroid
              text="T-shirt 👓"
              :image="require('../assets/polaroids/remera-negra.png')"
              direction="l"
              :rotation="3"
              class="image-first"
            >
            </Polaroid>            
            <Polaroid
              text="Green Friends 💚"
              :image="require('../assets/polaroids/friends.png')"
              direction="r"
              :rotation="3"
              class="image-third"
            >
            </Polaroid>
            <Polaroid
              text="Buzito 😎"
              :image="require('../assets/polaroids/buzo-gris.png')"
              direction="r"
              :rotation="1"
              class="image-second"
            >
            </Polaroid>
        </div>
        <div class="merchandising-text">
          <span>
            <template v-if="$isMobile()">
              <span class="green">
                Green whirl style 😏🌪️
              </span>
            </template>
            <template v-else>
              <b class="green">import</b> {<br>
                  Buzos,<br>
                  Remeras,<br>
                  Almohadones,<br>
                  Zapatillas,<br>
              } <b class="green">from</b> 'VueCba'
            </template>
          </span>
          <button class="button button-primary" @click="clicked = !clicked">
            Ver más
          </button>
        </div>
    </div>
  </div>
</template>

<script>
import Polaroid from './Atoms/Polaroid'
export default {
  name: "Merchandising",
  components:{
      Polaroid
  }
};
</script> 

<style lang="sass" scoped>
.merchandising
  position: relative
  display: flex
  align-items: center
  justify-content: center
  height: 80vh
  width: 100%
  margin-bottom: 4rem
  text-align: center
  background: radial-gradient(ellipse farthest-corner at 0px 50%,#b1f7d8ff,#d6fde833 50%) //url('../assets/polaroids/friends.png')
  background-position: right bottom
  background-size: auto 100%
  background-repeat: no-repeat
  
  &-text
    font-size: 2.5rem
    font-weight: 400
    opacity: .6
    width: 30%
    padding: .5rem
    text-align: start
    height: 100%
    .button
      margin-top: 2rem
      width: 90%
      background: #1ABB6D
      z-index: 15

  &-polaroids
    width: 50%
    font-size: 5rem
    width: 90%
    margin: 0 auto
    display: flex
  &-polaroids .image
    &-first
      position: absolute
      width: 30%
      height: 20px
      top: 0
      left: 1%
      z-index: 1
      &:hover 
        z-index: 10
    &-second
      position: absolute
      width: 35%
      height: 20px
      left: 15%

      z-index: 3
      &:hover 
        z-index: 10
    &-third
      position: absolute
      width: 30%
      height: 20px
      top: 0
      right: 35%
      z-index: 2
      &:hover 
        z-index: 10

@media (max-width: 502px)
  .merchandising
    flex-direction: column
    &-polaroids
      .image
        &-first
          width: 90% 
          left: 50%
          margin-left: -45%
          z-index: 2
          top: 20%
        &-second
          width: 90%
          left: 50%
          margin-left: -45%
          top: 20%
          z-index: 3
        &-third
          z-index: 1
          width: 90%
          left: 50%
          margin-left: -45%
          top: 20%
    &-text
      width: 100%
      span
        position: absolute
        top: 0
        left: 0
        width: 100%
        padding: 4rem 2rem
        font-size: 1.5rem
        text-align: center
        box-sizing: border-box
      button
        position: absolute
        width: 50% !important
        bottom: 5%
        left: 50%
        margin-left: -25%
        z-index: 15
</style>
