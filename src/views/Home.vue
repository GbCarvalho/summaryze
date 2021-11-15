<template lang="pug">
  v-card.fill-height.fill-width(color="purple lighten-5")
    v-container.d-flex(max-width="1440px")
      v-row
        card
        card
        card
        card

</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Home",

  components: {
    Card,
  },
};
</script>
