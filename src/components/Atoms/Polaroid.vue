<template>
  <div 
    @mouseover="()=>selected=!$isMobile()" 
    @mouseleave="()=>selected=false" 
    v-touch:tap="()=>selected=!selected"
    :class="['item', selected ? 'selected': '', `r-${adjustDirection}-${adjustValues(rotation)}`]"
    >
    <div class="polaroid">
        <img :src="image">
        <div class="caption">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Polaroid",
    props:{
      rotation: Number,
      image: String,
      text: String,
      direction: String,
    },
    data(){
      return {
        supportedDirections:['l','r'],
        selected: false,
        rotationValues: {
          max: 9,
          min: 0,
        }
      }
    },
    computed: {
      adjustDirection(){
        if(this.supportedDirections.includes(this.direction)){
          return this.direction;
        }else{
          return this.supportedDirections[0];
        }
      }
    },
    methods: {
      adjustValues(val){
        if (val < this.rotationValues.min) return this.rotationValues.min
        else if (val > this.rotationValues.max) return this.rotationValues.max
        else return val
      }
    }
}
</script>

<style lang="sass" scoped>

.polaroid
  background: #fff
  padding: 1rem
  box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.2)

.polaroid > img
  max-width: 100%
  max-height: 40rem

.caption 
  font-size: 1.8rem
  text-align: center
  line-height: 2em

.item
  display: inline-block
  margin-top: 2rem
  filter: grayscale(50%)
  &-mobile
    @extend .item
  
  &:hover
    filter: none
    transition: all 0.35s
  &.selected
    transform: scale(1, 1) rotate(0deg) !important

// TODO:(FECO) -> Preguntar a Franquito
.item.r-l
  &-1
    transform: rotate(-2deg) scale(0.9)
    transition: all 0.35s
  &-2
    transform: rotate(-4deg) scale(0.9)
    transition: all 0.35s
  &-3
    transform: rotate(-6deg) scale(0.9)
    transition: all 0.35s
  &-4
    transform: rotate(-8deg) scale(0.9)
    transition: all 0.35s
  &-5
    transform: rotate(-10deg) scale(0.9)
    transition: all 0.35s
.item.r-r
  &-1
    transform: rotate(2deg) scale(0.9)
    transition: all 0.35s
  &-2
    transform: rotate(4deg) scale(0.9)
    transition: all 0.35s
  &-3
    transform: rotate(6deg) scale(0.9)
    transition: all 0.35s
  &-4
    transform: rotate(8deg) scale(0.9)
    transition: all 0.35s
  &-5
    transform: rotate(10deg) scale(0.9)
    transition: all 0.35s


@media (max-width: 502px)
  .caption 
    font-size: 1rem
    text-align: center
    line-height: 1em
  .item
    &:hover
      filter: grayscale(50%)



</style>