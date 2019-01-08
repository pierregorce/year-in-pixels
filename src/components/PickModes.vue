<template>
  <div>
    <h3>select a pick mode</h3>
    <div v-for="pickMode in pickModes">
      <v-layout :class="selectedPickMode == pickMode ? 'red': ''" @click="selectPickMode(pickMode)">
        <v-flex xs4>{{pickMode.value}}</v-flex>
        <v-flex xs8>{{pickMode.name}}</v-flex>
      </v-layout>
    </div>
    <div>selected : {{selectedPickMode}}</div>
  </div>
</template>

<script>
export default {
  props: {
    pickModes: { type: Array, required: true },
    selectedPickMode: { type: Object, required: true }
  },
  data: function() {
    return {};
  },
  methods: {
    selectPickMode: function(pickMode) {
      this.$emit("update:selectedPickMode", pickMode);
    }
  }
};
</script>
