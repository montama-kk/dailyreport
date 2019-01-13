<template>
  <v-footer dark height="auto" color="primary" fixed>
    <v-layout justify-center row wrap>
      <v-btn
        v-for="link in links"
        :key="link.text"
        :href="link.href"
        :target="link.target"
        color="white"
        flat
        round
      >{{ link.text }}</v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      {
        text: 'Home',
        href: '/',
        target: ''
      },
      {
        text: 'About',
        href: '#about',
        target: ''
      },
      {
        text: 'Github',
        href: 'https://github.com/montama-kk/dailyreport',
        target: '_blank'
      }
    ]
  })
}
</script>

<style>
</style>
