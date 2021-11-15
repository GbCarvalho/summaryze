<template lang="pug">
  v-card.fill-height.fill-width(color="purple lighten-5")
    v-container.d-flex(max-width="1440px")
      v-row
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
};
</script>
