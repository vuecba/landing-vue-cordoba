<template>
  <div class="presentation">
    <img class="presentation-persons" src="../assets/persons.png" />
    <div class="container h-100 p-relative">
      <div class="presentation-text">
        <h1 class="presentation-text-title">
          Aprendé en
          <br />
          <b class="presentation-text-highlight">cordooobé</b>
        </h1>
        <h2 class="presentation-text-description">
          Espacio de encuentros, charlas, workshops y mentorías entorno a #vuejs
          en Córdoba, AR.
        </h2>
        <div class="presentation-text-actions">
          <template v-if="!clicked">
            <button class="button button-secondary" @click="clicked = !clicked">
              Desafíos
            </button>
            <button class="button button-primary" @click="clicked = !clicked">
              Eventos
            </button>
          </template>
          <template v-else>
            <h2>🚀 Próximamente!</h2>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
  data() {
    return {
      clicked: false,
    };
  },
};
</script>

<style lang="sass" scoped>

$vh: 100vh

.presentation
  position: relative
  width: 100%
  height: 100vh
  display: flex
  justify-content: flex-start
  align-items: center
  background-image: url('../assets/background.png')
  background-position: center bottom
  background-size: cover
  //background-color: #2b465e
  .container
    display: flex
    align-items: center
  &-background
    width: 100%
    position: absolute
    top: 0
    left: 0
    height: 100vh
    object-fit: cover
  &-text
    width: 40%
    height: min-content
    color: white
    font-size: 1rem
    position: relative
    left: 7%
    &-title
      line-height: 3.25rem
      font-size: 3rem
      margin-bottom: 1.25rem
      b
        font-size: 4rem
    &-description
      font-size: 1.25rem
      font-weight: 300
      margin: 0
    &-actions
      display: flex
      margin-top: 3rem
      h2
        letter-spacing: 1px

  &-persons
    max-height: 550px
    position: absolute
    right: 5%
    top: 50%
    transform: translateY(-35%)



@media (max-width: 502px)

  body
    background: red

  .presentation
    background-image: url('../assets/mobile-background.jpg')
    background-repeat: no-repeat
    background-size: cover
    &-background
      display: none
    &-text
      width: 100%
      left: 0
      text-align: center
      &-actions
        justify-content: space-around
        .button
          margin: 0
    &-persons
      display: none
</style>
