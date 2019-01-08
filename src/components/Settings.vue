<template>
  <div>
    <h3>select/edit colors</h3>
    <div v-for="(setting,index) in settings" :key="index">
      <v-layout :style="`background-color:${setting.colorHex}`">
        <v-flex xs8 @click="selectSetting(setting)">
          <v-text-field v-model="setting.name" label="Name" solo></v-text-field>
        </v-flex>
        <v-flex xs1>
          <v-btn @click="removeSetting(setting)">x</v-btn>
        </v-flex>
      </v-layout>
    </div>
    <v-btn @click="addNewSetting">add color</v-btn>
    <div>selected : {{selectedSetting}}</div>
  </div>
</template>
<script>
export default {
  props: {
    settings: { type: Array, required: true },
    selectedSetting: { type: Object, required: true },
    defaultSettings: { type: Array, required: true }
  },
  data: function() {
    return {
      maxSettings: 20,
      defaultNewColorHex: "#1976D2"
    };
  },
  methods: {
    selectSetting: function(setting) {
      this.$emit("update:selectedSetting", setting);
    },
    removeSetting: function(setting) {
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
      this.$emit("update:settings", [...this.settings, { name: "default-xxx", id: id + 1, colorHex: this.getNewColor() }]);
    },
    getNewColor: function() {
      return this.defaultNewColorHex;
    }
  }
};
</script>
