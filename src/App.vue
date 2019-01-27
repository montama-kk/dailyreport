<template>
  <div id="app">
    <v-app id="inspire">
      <commonNavHeader/>
      <v-content app>
        <router-view/>
      </v-content>
      <commonFooter/>
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
