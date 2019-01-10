<template>
  <v-app dark>
    <v-content>
      <v-container pa-2>
        <v-layout wrap align-center justify-center>
          <v-flex xs12>
            <div class="mb-2">
              <span class="headline font-weight-medium">YEAR IN PIXELS</span>
              <span class="ml-2 title font-weight-light grey--text">Lorem ipsum dolor sit amet ?</span>
            </div>
          </v-flex>

          <v-flex xs12>
            <v-tabs slot="extension" v-model="tab" color="grey darken-4" align-with-title height="28">
              <v-tabs-slider color="cyan"></v-tabs-slider>
              <v-tab v-for="(tab, index) in tabs" :key="index">{{ tab.name }}</v-tab>
              <div class="pr-2 pl-2 clickable" style="display: flex;" v-if="tabs.length < 6" href="#" @click="addTab">
                <v-icon class="subheading">add</v-icon>
              </div>
              <div class="pr-2 pl-2 clickable" style="display: flex;" v-if="tabs.length > 0" href="#" @click="removeTab">
                <v-icon class="subheading">clear</v-icon>
              </div>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="(tab, index) in tabs" :key="index">
                <v-card flat>
                  <v-card-text>
                    <v-container pa-0 fluid grid-list-sm>
                      <tab :name.sync="tab.name" :id="tab.id" :days="tab.days"></tab>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app>
      <span class="px-3">@ {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Tab from "./components/Tab";
import { getDays } from "./dateCalculation.js";

let data = [{ id: 0, name: "life", days: getDays() }, { id: 1, name: "work", days: getDays() }];

export default {
  name: "App",
  components: {
    Tab
  },
  data() {
    return {
      tab: null,
      tabs: data
    };
  },
  watch: {
    // name: {
    //   handler: function() {
    //     this.save();
    //   },
    //   deep: true
    // },
    // days: {
    //   handler: function() {
    //     this.save();
    //   },
    //   deep: true
    // },
    // settings: {
    //   handler: function() {
    //     this.save();
    //   },
    //   deep: true
    // }
  },
  methods: {
    save: function() {},
    addTab: function() {
      let id = Math.max(...this.tabs.map(m => m.id)) + 1;
      this.tabs.push({
        id: id,
        name: "todo",
        days: getDays()
      });
      this.tab = id;
    },
    removeTab: function() {
      this.tabs = this.tabs.filter(m => m.id != this.tabs[this.tab].id);
    }
  }
};
</script>
<style>
.clickable {
  text-decoration: none;
  cursor: pointer;
}
.panel {
  border: 2px solid rgb(97, 97, 97) !important;
}

.selected {
  border: 2px solid white !important;
}
</style>

