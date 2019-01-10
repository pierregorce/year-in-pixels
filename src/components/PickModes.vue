<template>
  <div>
    <v-card flat class="panel">
      <v-card-text>
        <div class="body-2 font-weight-light">
          select a
          <span class="black pa-1">PickMode</span>
        </div>
        <v-layout mt-2>
          <v-flex xs2>
            <v-card flat class="text-xs-center clickable">
              <div :class="selectedPickMode == pickModes[0] ? 'cyan': ''" @click="selectPickMode(pickModes[0])">
                <v-icon>texture</v-icon>
                <div>Fill</div>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <v-card flat class="text-xs-center clickable">
              <div :class="selectedPickMode == pickModes[1] ? 'cyan': ''" @click="selectPickMode(pickModes[1])">
                <v-icon>crop_din</v-icon>
                <div>Select</div>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- <div>selected : {{selectedPickMode}}</div> -->
      </v-card-text>
    </v-card>
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
