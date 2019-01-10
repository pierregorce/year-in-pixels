<template>
  <div :style="`background-color:${getOddBackgroundColor()}`">
    <v-fade-transition leave-absolute>
      <div :key="settingApplied.colorHex" :style="`background-color:${settingApplied.colorHex}!important`">
        <div v-if="message" style="position:absolute">@</div>
        <div v-if="selected">
          <div :class="`day selected`">
            <!-- {{date}} -->
          </div>
        </div>
        <div v-else>
          <div :class="`day color`">
            <!-- {{date}} -->
          </div>
        </div>
      </div>
    </v-fade-transition>
  </div>
</template>
<script>
export default {
  props: {
    date: { type: Number, required: true },
    settingApplied: { type: Object, required: true, default: null },
    selected: { type: Boolean, required: true },
    message: { type: String, required: false, default: "" }
  },
  methods: {
    getOddBackgroundColor() {
      if (this.isOddMonth && this.isOddDay) return "rgb(84, 84, 84)";
      if (this.isOddMonth && !this.isOddDay) return "rgb(70, 70, 70)";

      if (!this.isOddMonth && this.isOddDay) return "rgb(40, 40, 40)";
      if (!this.isOddMonth && !this.isOddDay) return "rgb(40, 40, 40)";

      return "none";
    }
  },
  computed: {
    isOddMonth() {
      return new Date(this.date).getMonth() % 2 != 0;
    },
    isOddDay() {
      return new Date(this.date).getDay() % 2 != 0;
    }
  }
};
</script>
<style>
.day {
  width: 25px;
  height: 25px;
  display: block;
  text-decoration: none;
  border: 1px solid #d8d8d8;
  margin-bottom: -1px;
  text-align: center;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>

