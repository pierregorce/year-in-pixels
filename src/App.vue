<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12>
            <v-text-field v-model="name" label="Year's name" solo></v-text-field>
            <v-layout justify-center>
              <v-flex xs4>
                <pick-modes :pick-modes="pickModes" :selected-pick-mode.sync="selectedPickMode"></pick-modes>
                <settings :settings.sync="settings" :selected-setting.sync="selectedSetting" :default-settings="defaultSettings"></settings>
              </v-flex>
              <v-flex xs8>
                <div>
                  <h3>{{new Date(selectedDay.date)}}</h3>
                  <h4>Custom Message</h4>
                  <message-editor v-if="Object.keys(selectedDay).length" :message.sync="selectedDay.message"></message-editor>
                </div>
                <grid :days="days" :selected-day.sync="selectedDay" :selected-setting="selectedSetting" :selected-pick-mode="selectedPickMode"></grid>
              </v-flex>
            </v-layout>
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
import Grid from "./components/Grid";
import Settings from "./components/Settings";
import PickModes from "./components/PickModes";
import MessageEditor from "./components/MessageEditor";

let defaultSettings = [
  { name: "default-1", id: 1, colorHex: "#009688" },
  { name: "default-2", id: 2, colorHex: "#3f51b5" },
  { name: "default-2", id: 3, colorHex: "#2196f3" },
  { name: "default-2", id: 4, colorHex: "#c2185b" },
  { name: "default-2", id: 5, colorHex: "#4caf50" },
  { name: "default-2", id: 6, colorHex: "#f57c00" },
  { name: "default-2", id: 7, colorHex: "#e64a19" }
];

let pickModes = [
  { name: "select color then affect on click", value: "selectColor" },
  { name: "select day then affect color", value: "selectDay" },
  { name: "select for edit message", value: "selectOnly" }
];

import { getDays } from "./dateCalculation.js";

let days = getDays();

export default {
  name: "App",
  components: {
    Grid,
    Settings,
    PickModes,
    MessageEditor
  },
  data() {
    return {
      name: "qzdqzdqzdsgsdfg",

      days: days,
      selectedDay: {},

      settings: defaultSettings,
      defaultSettings: defaultSettings,
      selectedSetting: defaultSettings[0],

      pickModes: pickModes,
      selectedPickMode: pickModes[0]
    };
  }
};
</script>
