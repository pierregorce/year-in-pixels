<template>
  <v-textarea box label="Message" auto-grow v-model="messageData" :rows="2"></v-textarea>
</template>
<script>
export default {
  props: {
    message: { type: String, required: false, default: "" }
  },
  computed: {
    messageData: {
      get: function() {
        return this.message;
      },
      set: function(value) {
        this.$emit("update:message", value);
      }
    }
  }
};
</script>
