<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12>
      <v-text-field
            v-model="name"
            label="Year's name"
            solo
          ></v-text-field>

            <pick-modes :selected-pick-mode.sync="selectedPickMode"></pick-modes>
            <settings :settings.sync="settings" :selected-setting.sync="selectedSetting"></settings>
            <grid 
            :grid.sync="grid" 
            :selected-setting="selectedSetting" 
            :selected-pick-mode="selectedPickMode">
            </grid>

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
import Settings from "./components/Settings";
import PickModes from "./components/PickModes";

let colors = [
 { name: "none", color: 1 },
  { name: "loreaaam", color : 2 }, 
  { name: "ddd", color: 3 }
  , { name: "orange", color: 4 }
  , { name: "purple", color: 5 }
  , { name: "iooui", color: 6 }
  , { name: "qzddzq", color: 7 }
  // , { name: "qzddzq", id: 8 , hexCode : "" }, todo a mettre en place => ajout de couleur en illimité <20
  ];

export default {
  name: "App",
  components: {
    Grid, Settings, PickModes
  },
  data() {
    return {
      name : "qzdqzdqzdsgsdfg",
      grid : {},
      settings : [],
      selectedSetting : null,
      selectedPickMode : null,
    };
  }
};
</script>
