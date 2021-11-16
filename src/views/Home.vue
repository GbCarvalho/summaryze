<template lang="pug">
  v-card.fill-height.fill-width(color="purple lighten-5")
    v-container.d-flex(max-width="1440px")
      v-row
        card(v-for="card in this.$store.getters['videos']" :key="card.videoURL" :cardContent="card")
        new-item-form(v-if="pressed" @card-create="pressed = !pressed")
      v-btn.floating.deep-purple.accent-2(bottom right fab @click="pressed = !pressed")
        v-icon.white--text mdi-bookmark-plus-outline
</template>

<script>
import Card from "@/components/Card";
import NewItemForm from "@/components/NewItemForm";

export default {
  name: "Home",

  data: function () {
    return {
      pressed: false,
    };
  },

  components: {
    Card,
    NewItemForm,
  },
};
</script>

<style lang="less" scoped>
.floating {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
</style>
