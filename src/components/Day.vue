<template>
  <div @click="select">
    <!--    
<div :class="'day '+ getColor(day.value) + ' selected'" v-for="day in month.days" @click="select(day)">
              {{day.dayIndex}}/{{day.value}}
    </div>-->
    <div v-if="day.selected">
      <div class="day">{{day.dayIndex}}/{{day.value}}</div>
    </div>
    <div v-else>
      <div class>{{day.dayIndex}}/{{day.value}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    day: { type: Object, required: true }
    // selectModes : { type: Object, required: true },
  },
  methods: {
    select: function() {
      if (selectModes == "selectDay") {
      }

      if (selectModes == "selectColor") {
      }

      if (selectModes == "selectOnly") {
      }
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
  font-size: 8px;
}

.selected {
  border: 2px solid red;
}
</style>

