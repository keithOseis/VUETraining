<template>
  <div>
    <topbar/>
    <nuxt />
  </div>
</template>

<script>
import Topbar from "~/components/topbar.vue";

export default {
  components: {
    topbar: Topbar,
  },
};
</script>