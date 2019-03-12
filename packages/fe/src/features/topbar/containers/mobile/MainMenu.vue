<template>
  <v-layout
    row
    wrap
  >
    <v-btn
      :to="{ name: 'Home' }"
      exact
      block
      dark
      flat
    >
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn
      :to="{ name: 'Groups' }"
      block
      dark
      flat
    >
      <v-icon>group_work</v-icon>
    </v-btn>
    <v-btn
      :to="{ name: 'Events' }"
      block
      dark
      flat
    >
      <v-icon>event</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: 'MainMenu',
};
</script>

<style lang="stylus" scoped>
  .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
    background-color: currentColor;
  }
</style>
