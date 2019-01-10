<template>
  <div>
    <div v-show="visible">
      <div style="position:relative">
        <div ref="me" style="position:absolute; left:500px;"></div>
      </div>
    </div>
    <v-btn fab small @click="open">
      <v-icon small>colorize</v-icon>
    </v-btn>
    <!-- <v-btn fab small @click="open">open</v-btn> -->
    <!-- <v-btn fab small @click="close">close</v-btn> -->
  </div>
</template>
<script>
import "codemirror-colorpicker/dist/codemirror-colorpicker.css";
import { ColorPicker } from "codemirror-colorpicker";
var colorpicker = null;
export default {
  props: {
    colorHex: { required: true, type: String },
    visible: { required: true, type: Boolean }
  },
  data: function() {
    return {};
  },
  methods: {
    open: function() {
      this.$emit("update:visible", !this.visible);
    },
    close: function() {
      this.$emit("update:visible", false);
    }
  },
  mounted: function() {
    var that = this;
    var options = {
      mode: "edit",
      color: that.colorHex,
      position: "inline",
      container: this.$refs.me,
      onChange(color) {
        that.$emit("update:colorHex", color);
      },
      onHide(color) {
        console.log("when colorpicker is hide", color);
      },
      colorSets: [
        {
          name: "Material",
          colors: [
            "#F44336",
            "#E91E63",
            "#9C27B0",
            "#673AB7",
            "#3F51B5",
            "#2196F3",
            "#03A9F4",
            "#00BCD4",
            "#009688",
            "#4CAF50",
            "#8BC34A",
            "#CDDC39",
            "#FFEB3B",
            "#FFC107",
            "#FF9800",
            "#FF5722",
            "#795548",
            "#9E9E9E",
            "#607D8B"
          ]
        }
      ]
    };

    colorpicker = new ColorPicker(options);
    // colorpicker.hide();
    // colorpicker.show();
    // console.log(colorpicker);
  }

  //todo le detroy
};
</script>


