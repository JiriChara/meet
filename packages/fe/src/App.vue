<template>
  <v-app>
    <component :is="layout" />
  </v-app>
</template>

<script>
import DefaultLayout from '@/layout/default/DefaultLayout.vue';

const defaultLayout = 'default';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },

  computed: {
    layout() {
      return `${(this.$route.meta.layout || defaultLayout)}-layout`;
    },
  },
};
</script>
