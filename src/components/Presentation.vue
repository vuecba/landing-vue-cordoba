<template>
  <div class="presentation">
    <img class="presentation-background" src="../assets/background.png" alt />
    <img class="presentation-persons" src="../assets/persons.png" />
    <div class="container h-100 p-relative">
      <div class="presentation-text">
        <h1 class="presentation-text-title">
          Aprendé en
          <br />
          <b class="presentation-text-highlight">cordooobé</b>
        </h1>
        <h2
          class="presentation-text-description"
        >Espacio de encuentros, charlas, workshops y mentorías entorno a #vuejs en Córdoba, AR.</h2>
        <div class="presentation-text-actions">
          <button class="button button-secondary">Desafíos</button>
          <button class="button button-primary">Eventos</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation"
};
</script>

<style lang="sass" scoped>

$vh: 100vh;

.presentation
  position: relative
  width: 100%
  height: 100vh
  display: flex
  justify-content: flex-start
  align-items: center
  .container
    display: flex
    align-items: center
  &-background
    width: 100%
    position: absolute
    top: 0
    left: 0
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
    background: url('../assets/mobile-background.jpg')
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


