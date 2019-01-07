<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12>
            <h1>qzdqzd</h1>
            <grid></grid>
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

export default {
  name: "App",
  components: {
    Grid
  },
  data() {
    return {
      //
    };
  }
};
</script>
