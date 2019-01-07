<template>
  <div>
    <h3>colors</h3>
    <div v-for="setting in settings">
      <v-layout>
        <!-- <v-flex xs3 :class="'color-'+setting">{{color.color}}</v-flex> -->
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
let defaultSettings = [
  { name: "default-1", id: 1, colorHex: "" },
  { name: "default-2", id: 2, colorHex: "" }
];

export default {
  props: {
    settings: { type: Array, required: true },
    selectedSetting: { type: Object, required: true },
    maxSettings: 20
  },
  data: function() {
    return {};
  },
  methods: {
    selectSetting: function(setting) {
      this.$emit("update:selectedSetting", setting);
    },
    removeSetting: function(setting) {
      this.$emit("update:settings",this.settings.filter(m => m.id != setting.id));
      if(this.selectedSetting.id == setting.id) {
        this.$emit("update:selectedSetting", null);
      }
      this.$emit("remove", setting);
    },
    addNewSetting: function() {
      if (this.settings.length >= this.maxSettings) return;
      this.$emit("update:settings", [
        ...this.settings,
        { name: "default-xxx", id: this.settings.max(m=> m.id), colorHex: "" }
      ]);
      // for (var i = 1; i < colors.length; i++) {
      //   if (this.colors.filter(m => m.color == i).length == 0) {
      //     this.colors.push({ name: "todo", color: i });
      //     return;
      //   }
      // }
    }
  }
};
</script>
