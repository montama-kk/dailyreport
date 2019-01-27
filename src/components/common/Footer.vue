<template>
  <v-footer dark height="auto" color="primary">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link.text" :to="link.href" input-value="false" color="primary" round>
        {{ link.text }}</v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer",
    data: () => ({
      links: [{
          text: "Home",
          href: "/",
        },
        {
          text: "About",
          href: "/about",
        },
        {
          text: "Github",
          href: "/github",
        },
      ]
    }),
  };
</script>

<style scoped>
.v-footer {
  z-index: 4;
}
</style>
