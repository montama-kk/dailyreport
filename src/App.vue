<template>
  <div id="app">
    <v-app id="inspire">
      <commonNavHeader/>
      <v-content>
        <router-view/>
      </v-content>
      <!-- <v-btn fab bottom right color="pink" dark fixed @click.stop="dialog = !dialog">
        <v-icon>add</v-icon>
      </v-btn> -->
      <!-- <commonFooter/> -->
    </v-app>
  </div>
</template>

<script>
import commonNavHeader from "./components/common/NavHeader";
import commonFooter from './components/common/Footer'

export default {
  name: "App",
  components: {
    commonNavHeader,
    commonFooter,
  }
};
</script>

<style>
</style>
