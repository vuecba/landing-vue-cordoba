<template>
  <div class="presentation">
    <img class="presentation-background" src="../assets/background.png" alt>
    <div class="presentation-text">
      <div class="presentation-text-container">
        <p class="presentation-text-title">Aprendé en
          <br>
          <b class="presentation-text-highlight">cordooobé</b>
        </p>
        <p>Espacio de encuentros, charlas, workshops y mentorías entorno a #vuejs en Córdoba, AR.</p>
        <div class="presentation-text-buttons">
          <div class="button button-secondary">Desafíos</div>
          <div class="button button-primary">Eventos</div>
        </div>
      </div>
    </div>
    <img class="presentation-persons" src="../assets/persons.png">
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
  display:flex
  justify-content: flex-start
  align-items: center
  &-background
    width: 100%
    margin: 0
  &-text
    width: 30%
    color: white
    font-size: 1rem
    &-title
      line-height: 2.5rem
      font-size: 2.4rem
    &-highlight
      font-size: 3rem
    &-buttons
      margin-top: 25px
      display: flex
      justify-content: start-flex

  &-persons
    max-height: 550px
    position: absolute
    right: 5%
    top: 50%
    margin-top: -200px

.button
  width: 35%
  height: 40px
  margin-right: 5%
  border-radius: 5px
  display: flex
  justify-content: center
  align-items: center
  &-primary
    background:#1ABB6D
    color: #ffffff
    border: 1px solid #3BEC96
    box-shadow: 0px 7px 10px -5px #3BEC96
    &:hover
      cursor: pointer
  &-secondary
    background:#2B425A
    color: #ffffff
    border: 1px solid #ffffff
    box-shadow: 0px 4px 10px -5px #ffffff
    &:hover
      cursor: pointer


@media (max-width: 502px)

  body
    background: red

  .presentation
    width: 100%
    height: $vh   
    &-background
      display: none
    &-text
      display: flex
      align-items: center
      background: #2B425A
      width: 100%
      height: 100%
      left: 0
      top: 0
      padding: 10%
      &-title
        display: block
        line-height: 2.5rem
        font-size: 2.4rem
      &-highlight
        display: block
        font-size: 3rem
      &-buttons
        display: block
        margin-top: 25px
        display: flex
        justify-content: start-flex
      
    &-persons
      display: none
</style>


