<template>
  <div>
    <h3>pick mode</h3>
    <div v-for="mode in modes">
      <v-layout :class="selectedMode == mode.value ? 'red': ''" @click="selectedMode = mode.value">
        <v-flex xs4>{{mode.value}}</v-flex>
        <v-flex xs8>{{mode.name}}</v-flex>
      </v-layout>
    </div>
  </div>
</template>


<script>

let selectModes = [
  {name : "select color then affect on click", value : "selectColor"},
  {name : "select day then affect color", value : "selectDay"},
  {name : "select for edit message", value : "selectOnly"}
]

export default {
  props: {
    selectedPickMode: { type: Object, required : true },
  },
  data: function() {
    return {
        selectModes : selectModes
    };
  },
  methods: {
    selectPickMode: function(pickMode){
      this.$emit("update:selectedPickMode", pickMode)
    },
    removeSetting: function(setting) {
      this.$emit("update:settings", this.settings.filter(m => m.id != setting.id))
      this.$emit("remove", setting);
    },
    addNewSetting: function() {
      if (this.settings.length >= this.maxSettings) return;
      this.$emit("update:settings", [...this.settings, {name : "default-xxx", id : this.settings.length, colorHex : ""}])
      // for (var i = 1; i < colors.length; i++) {
      //   if (this.colors.filter(m => m.color == i).length == 0) {
      //     this.colors.push({ name: "todo", color: i });
      //     return;
      //   }
      // }
    },
    
  }
};
</script>
