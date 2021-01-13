<template>
  <div class="ball" :style="styleObject">
    {{ number }}
  </div>
</template>
<script>
export default {
  name: "LottoBall",
  props: {
    number: Number,
  },
  computed: {
    styleObject() {
      let background;
      if (this.number < 10) {
        background = "red";
      } else if (this.number < 20) {
        background = "orange";
      } else if (this.number < 30) {
        background = "green";
      } else if (this.number < 40) {
        background = "blue";
      } else {
        background = "violet";
      }
      return {
        background,
      };
    },
  },
};
</script>
<style>
.ball {
  display: inline-block;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
  color: #fff;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
