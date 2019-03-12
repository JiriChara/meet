<template>
  <div>
  <topbar :isMobile="isMobile" />
  <v-container>
    <v-content>
      <router-view />
    </v-content>
    <div>Footer</div>
  </v-container>
  </div>
</template>

<script>
import Topbar from '@/features/topbar/views/Topbar.vue';

export default {
  name: 'DefaultLayout',

  data: () => ({
    isMobile: false,
  }),

  components: {
    Topbar,
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>
