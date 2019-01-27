<template>
  <div>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.mdAndUp" fixed app v-model="drawer" width="200">
      <v-list dense>
        <template v-for="item in items">
          <v-list-tile :key="item.text" :to="item.icon">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Daily Report</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "home",
        text: "Home"
      },
      {
        icon: "group",
        text: "Group"
      },
      {
        icon: "create",
        text: "Create"
      },
      {
        icon: "settings",
        text: "Settings"
      },
      {
        icon: "help",
        text: "Help"
      }
    ]
  })
};
</script>

<style>
.v-toolbar > .v-toolbar__content {
  padding-left: 2px;
}
</style>
