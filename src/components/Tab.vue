<template>
  <v-layout wrap>
    <!-- <v-flex xs11>
      <v-text-field v-model="nameComputed" label="Year's name" single-line append-icon="edit"></v-text-field>
    </v-flex>
    <v-flex xs1>
      <v-btn fab small @click="$emit('removeTab')">
        <v-icon small>clear</v-icon>
      </v-btn>
    </v-flex>-->
    <v-flex xs12>
      <v-layout justify-center>
        <v-flex xs4>
          <pick-modes :pick-modes="pickModes" :selected-pick-mode.sync="selectedPickMode"></pick-modes>
          <settings :settings.sync="settings" :selected-setting.sync="selectedSetting" :default-settings="defaultSettings" @remove="removeSetting"></settings>
        </v-flex>
        <v-flex xs8>
          <v-expand-transition>
            <div v-if="Object.keys(selectedDay).length">
              <v-fade-transition leave-absolute>
                <span :key="selectedDay.date">
                  <h3>{{new Date(selectedDay.date)}}</h3>
                </span>
              </v-fade-transition>

              <h4>Custom message for this day</h4>
              <message-editor :message.sync="selectedDay.message"></message-editor>
            </div>
          </v-expand-transition>
          <grid :days="days" :selected-day.sync="selectedDay" :selected-setting="selectedSetting" :selected-pick-mode="selectedPickMode"></grid>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import Grid from "./Grid";
import Settings from "./Settings";
import PickModes from "./PickModes";
import MessageEditor from "./MessageEditor";

let defaultSettings = [
  { name: "Sport", id: 1, colorHex: "#009688", colorPickerVisible: false },
  { name: "Alcool", id: 2, colorHex: "#3f51b5", colorPickerVisible: false },
  { name: "Cheatmeal", id: 3, colorHex: "#2196f3", colorPickerVisible: false },
  { name: "Kitesurf", id: 4, colorHex: "#c2185b", colorPickerVisible: false },
  { name: "Sex", id: 5, colorHex: "#4caf50", colorPickerVisible: false },
  { name: "Friends", id: 6, colorHex: "#f57c00", colorPickerVisible: false },
  { name: "AquaPoney", id: 7, colorHex: "#e64a19", colorPickerVisible: false }
];

let pickModes = [
  { name: "select color then affect on click", value: "selectColor" },
  { name: "select day then affect color", value: "selectDay" },
  { name: "select for edit message", value: "selectOnly" }
];

export default {
  components: {
    Grid,
    Settings,
    PickModes,
    MessageEditor
  },
  props: {
    id: { required: true, type: Number },
    name: { required: true, type: String },
    days: { required: true, type: Array }
  },
  data() {
    return {
      selectedDay: {},

      settings: defaultSettings,
      defaultSettings: defaultSettings,
      selectedSetting: defaultSettings[0],

      pickModes: pickModes,
      selectedPickMode: pickModes[0]
    };
  },
  methods: {
    removeSetting: function(setting) {}
  },
  computed: {
    nameComputed: {
      get: function() {
        return this.name;
      },
      set: function(value) {
        this.$emit("update:name", value);
      }
    }
  }
};
</script>

