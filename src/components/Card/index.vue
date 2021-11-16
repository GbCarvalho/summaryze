<template lang="pug">
  v-col(cols="12" md="4")
    v-card.mx-auto(elevation="6" width="100%" color="white")
      a.d-flex.text-decoration-none(:href="this.cardContent.videoURL")
        v-img.align-center.text-center(:src="imageURL" width="100%" max-height="400")
          v-icon.white--text.border(size="78") mdi-play
      v-card-title {{this.cardContent.title}}
      v-card-subtitle {{this.cardContent.author}}
        v-icon.text--sencondary.ml-1(size="16") mdi-account-outline
      v-card-text {{this.cardContent.description}}
      //- Needs to add the Useful Links to the form before adding at the front
      //- v-divider.mx-4
      //- v-card-title Links úteis
      //- v-card-text
      //-   v-chip-group(column)
      //-     custom-chip(plataform="github" link="https://github.com") Github
      //-     custom-chip(plataform="slack" link="https://github.com") Slack

</template>

<script>
import CustomChip from "./Chip.vue";

export default {
  props: {
    cardContent: {
      type: {
        videoURL: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        author: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        imageURL: {
          type: String,
        },
      },
      required: true,
    },
  },
  components: {
    CustomChip,
  },
  computed: {
    imageURL() {
      console.log(this.cardContent);

      if (this.cardContent.imageURL) {
        return this.cardContent.imageURL;
      }

      return require("@/assets/SMMR.png");
    },
  },
};
</script>
