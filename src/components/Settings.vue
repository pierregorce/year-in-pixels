<template>
  <v-card flat class="panel mt-1">
    <v-card-text>
      <v-layout>
        <v-flex xs9>
          <div class="body-2 font-weight-light">
            select or edit a
            <span class="black pa-1">Color</span>
          </div>
        </v-flex>
        <v-flex xs3>
          <div v-if="settings.length < maxSettings" @click="addNewSetting">
            <v-card flat class="text-xs-center clickable">
              <div class="cyan">
                <v-icon>add</v-icon>
                <div>Add</div>
              </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>

      <div class="mt-2">
        <v-slide-y-transition group>
          <div v-for="setting in settings" :key="setting.id">
            <v-layout :key="setting.id" align-center>
              <v-flex xs2>
                <v-card flat :style="`background-color:${setting.colorHex}`" :class="`setting ${setting == selectedSetting ? 'selected' : ''}`" @click="selectSetting(setting)"></v-card>
                <!-- <color-picker :visible.sync="setting.colorPickerVisible" :color-hex.sync="setting.colorHex"></color-picker> -->
              </v-flex>
              <v-flex xs8>
                <v-text-field small v-model="setting.name" label="Name" box append-icon="edit"></v-text-field>
              </v-flex>
              <v-flex xs1>
                <v-btn fab small @click="removeSetting(setting)">
                  <v-icon small>delete</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
        </v-slide-y-transition>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import ColorPicker from "./ColorPicker";

export default {
  components: {
    ColorPicker
  },
  props: {
    settings: { type: Array, required: true },
    selectedSetting: { type: Object, required: true },
    defaultSettings: { type: Array, required: true }
  },
  data: function() {
    return {
      maxSettings: 7,
      colorPickerVisible: false
    };
  },
  methods: {
    selectSetting: function(setting) {
      this.$emit("update:selectedSetting", setting);
    },
    removeSetting: function(setting) {
      setting.colorPickerVisible = false;
      this.$emit("update:settings", this.settings.filter(m => m.id != setting.id));
      if (this.selectedSetting.id == setting.id) {
        this.$emit("update:selectedSetting", {});
      }
      this.$emit("remove", setting);
    },
    addNewSetting: function() {
      if (this.settings.length >= this.maxSettings) return;
      let id = this.settings.reduce((a, b) => (a.id > b.id ? a : b), { id: 1 }).id;
      let colorHex = "";
      let newSetting = this.getNewSetting();
      this.$emit("update:settings", [...this.settings, { name: newSetting.name, id: id + 1, colorHex: newSetting.colorHex }]);
    },
    getNewSetting: function() {
      for (var setting of this.defaultSettings) {
        let colorHex = setting.colorHex;
        let colorAlreadyAdded = this.settings.filter(m => m.colorHex == colorHex).length > 0;
        if (!colorAlreadyAdded) return setting;
      }
      // defaultNewColorHex: "#1976D2";
      //return this.defaultNewColorHex;
    }
  }
};
</script>
<style>
.setting {
  margin-bottom: 7px;
  width: 25px;
  height: 25px;
  border: 2px solid#212121 !important;
  cursor: pointer;
}

</style>
