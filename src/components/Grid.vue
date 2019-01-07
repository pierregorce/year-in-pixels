<template>
  <v-container fluid text-xs-center>
    <v-layout>
      <v-flex xs4>
        
    <div>{{selectedDays}}</div>

      </v-flex>
      <v-flex xs4>
        <v-layout wrap>
          <v-layout>
            <v-flex xs1 v-for="day in days">{{day}}</v-flex>
            </v-layout>
          <v-flex xs12 v-for="(week, index) in grid.map(m=>m.days).reduce((a,b)=> [...a, ...b],[]).chunk(7)">
            <v-layout>
              <v-flex xs1>{{index}}</v-flex>
              <v-flex xs1 v-for="day in week">
                <!-- <div class="day" @click="select(day)">{{day.dayIndex}}/{{day.value}}</div> -->
                <day :day="day" :selected="day == selectedDays" @select="select"></day>
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
              <day :day="day" :selected="day == selectedDays" @select="select"></day>
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
      color: 0,
      message: "",
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
      days: generateDays(i, year),
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

import Day from "./Day";

export default {
  components: {
    Day
  },
  props : {
    grid: { type: Object, required : true },
    selectedSetting: { type: Object, required : true },
    selectedPickMode: { type: Object, required : true },
  },
  data: () => ({
    selectedDays : null,
  }),
  
  methods: {

    select: function(day) {
        console.log(day)
      //we should not edit day here... bads

      if (this.selectedMode == "selectDay") {
        this.selectedDays = day;
      }

      if (this.selectedMode == "selectColor") {
        this.selectedDays = day;
        day.color = this.selectedColor;
      }

      if (this.selectedMode == "selectOnly") {
        this.selectedDays = day;
      }


    }
  }
};
</script>

<style>

.color-1 {
  background-color:#009688;
}

.color-2 {
  background-color: #3F51B5;
}
.color-3 {
  background-color: #2196F3;
}

.color-4 {
  background-color:#C2185B;
}

.color-5 {
  background-color:#4CAF50;
}

.color-6 {
  background-color:#F57C00;
}

.color-7 {
  background-color:#E64A19;
}


</style>
