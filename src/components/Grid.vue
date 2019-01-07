<template>
  <v-container fluid text-xs-center>
    <v-layout>
      <v-flex xs4>
        <h3>pick mode</h3>
        <div>select color then affect on click</div>
        <div>select day then affect color</div>
        <div>select for edit message</div>
        <h3>settings</h3>
        <div v-for="setting in settings">
          <v-layout>
            <v-flex xs4>{{setting.value}}</v-flex>
            <v-flex xs8>{{setting.name}}</v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs4>
        <v-layout wrap>
          <v-flex xs12 v-for="(week, index) in grid.map(m=>m.days).reduce((a,b)=> [...a, ...b],[]).chunk(7)">
            <v-layout>
              <v-flex xs1>{{index}}</v-flex>
              <v-flex xs1 v-for="day in week">
                <!-- <div class="day" @click="select(day)">{{day.dayIndex}}/{{day.value}}</div> -->
                <day :day="day"></day>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4>
        <v-layout>
          <v-flex xs1 v-for="month in grid">
            <div>{{month.monthIndex}}</div>
            <template v-for="day in month.days">
              <day :day="day"></day>
            </template>
            <!-- <div :class="'day '+ getColor(day.value) + ' selected'" v-for="day in month.days" @click="select(day)">
              {{day.dayIndex}}/{{day.value}}
            </div>-->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <!-- <div>{{grid}}</div> -->
  </v-container>
</template>

<script>
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var year = 2019;

function daysQuantityInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
function generateDays(month, year) {
  var data = [];
  var dayQuantity = daysQuantityInMonth(month, year);

  for (var i = 0; i < dayQuantity; i++) {
    data.push({
      date: new Date(year, month, i + 1),
      dayIndex: new Date(year, month, i + 1).getDay(),
      day: days[new Date(year, month, i + 1).getDay()],
      value: 0,
      message: "",
      selected: false
    });
  }
  return data;
}
function generateGrid(year) {
  var grid = [];

  for (var i = 0; i < months.length; i++) {
    grid.push({
      monthIndex: i,
      month: months[i],
      daysQuantity: daysQuantityInMonth(i, year),
      days: generateDays(i, year)
    });
  }
  return grid;
}
Array.prototype.chunk = function(chunk_size) {
  var temp = this.slice(0),
    results = [];

  while (temp.length) {
    results.push(temp.splice(0, chunk_size));
  }
  return results;
};

let grid = generateGrid(year);
let settings = [{ name: "qzd", value: 0 }, { name: "ddd", value: 1 }];
let selectModes = ["selectOnly", "selectColor", "selectDay"];

import Day from "./Day";

export default {
  components: {
    Day
  },
  data: () => ({
    grid: grid,
    settings: settings,
    selectMode: selectModes[0]
  }),
  methods: {
    getColor: function(value) {
      if (value == 0) return "blue";
      if (value == 1) return "green";
      return "pink";
    },
    select: function(day) {
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
</style>
