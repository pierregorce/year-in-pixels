<template>
  <v-container fluid text-xs-center>
    <v-layout>
      <v-flex xs5>
        <v-layout wrap justify-center>
          <div class="day"></div>
          <div class="day" v-for="dayName in dayNames">{{dayName}}</div>
          <div v-for="(week, index) in daysByWeeks" :key="index">
            <v-layout>
              <div class="day">{{index}}</div>
              <div v-for="(day, index) in week" :key="index">
                <div @click="select(day)">
                  <day :date="day.date" :setting-applied="day.settingApplied" :message.sync="day.message" :selected="day == selectedDay"></day>
                </div>
              </div>
            </v-layout>
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs7>
        <v-layout justify-center>
          <div>
            <div v-for="(month, index) in daysByMonths[0].days">
              <div class="day">{{index}}</div>
            </div>
            <div class="day">31</div>
          </div>
          <div v-for="(month, index) in daysByMonths" :key="index">
            <div class="day">{{monthNames[index] }}</div>
            <template v-for="day in month.days">
              <div @click="select(day)">
                <day :date="day.date" :setting-applied="day.settingApplied" :message.sync="day.message" :selected="day == selectedDay"></day>
              </div>
            </template>
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
Array.prototype.chunk = function(chunk_size) {
  var temp = this.slice(0),
    results = [];

  while (temp.length) {
    results.push(temp.splice(0, chunk_size));
  }
  return results;
};

import Day from "./Day";
import * as dateCalculation from "../dateCalculation.js";

export default {
  components: {
    Day
  },
  props: {
    days: { type: Array, required: true },
    selectedSetting: { type: Object, required: true },
    selectedPickMode: { type: Object, required: true },
    selectedDay: { type: Object, required: true }
  },
  data: () => ({
    monthNames: dateCalculation.months,
    dayNames: dateCalculation.days
  }),
  computed: {
    daysByMonths: function() {
      let dayByMonths = [];
      let months = dateCalculation.months;

      for (let i = 0; i < months.length; i++) {
        let dayQuantity = dateCalculation.daysQuantityInMonth(i, dateCalculation.year);
        let currentMonth = { monthIndex: i, days: [] };
        dayByMonths.push(currentMonth);
        for (let j = 0; j < dayQuantity; j++) {
          let day = this.days.filter(m => m.date == new Date(dateCalculation.year, i, j + 1).getTime())[0];
          currentMonth.days.push(day);
        }
      }
      return dayByMonths;
    },
    daysByWeeks: function() {
      return this.days.chunk(7);
    }
  },
  methods: {
    select: function(day) {
      if (this.selectedPickMode.value == "selectDay") {
        this.$emit("update:selectedDay", day);
      }
      if (this.selectedPickMode.value == "selectColor") {
        this.$emit("update:selectedDay", day);
        day.settingApplied = this.selectedSetting;
      }
      if (this.selectedPickMode.value == "selectOnly") {
        this.$emit("update:selectedDay", day);
      }
    }
  }
};
</script>

<style>
</style>
