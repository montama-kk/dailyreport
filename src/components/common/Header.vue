<template>

</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  computed: mapState(["drawer"]),
  methods: {
    ...mapMutations(["toggleDrawer"])
  }
};
</script>

<style>
</style>
