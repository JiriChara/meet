<template>
  <v-toolbar
    color="blue"
    dense
    fixed
    clipped-left
    app
  >
    <v-toolbar-title class="pr-5 align-center">
      <span class="title">Meet</span>
    </v-toolbar-title>
    <v-spacer />
    <main-menu-mobile
      v-if="isMobile"
      slot="extension"
    />
  </v-toolbar>
</template>

<script>
import MainMenuMobile from '@/features/topbar/containers/mobile/MainMenu.vue';

export default {

  props: {
    isMobile: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  components: {
    MainMenuMobile,
  },
};
</script>
