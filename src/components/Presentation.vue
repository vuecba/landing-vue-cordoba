<template>
  <div class="presentation">
    <img class="presentation-background" src="../assets/background.png" alt>
    <div class="presentation-text">
      <p class="presentation-text-title">Aprendé en
        <br>
        <b class="presentation-text-highlight">cordooobé</b>
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, nulla modi ut voluptas consequatur animi itaque ex.</p>
      <div class="presentation-text-buttons">
        <div class="button button-secondary">Desafíos</div>
        <div class="button button-primary">Eventos</div>
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

.presentation
  position: relative
  display:flex
  margin-top: 100px
  width: 100%
  justify-content: flex-start
  &-background
    width: 100%
    margin: 0
  &-text
    width: 30%
    height: 300px
    position: absolute
    top: 50%
    margin-top: -200px
    left: 10%
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
    margin-top: -250px

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
</style>


