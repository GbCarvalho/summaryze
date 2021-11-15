<template lang="pug">
  v-col(cols="12" md="4")
    v-card.mx-auto(elevation="6" width="100%" color="white")
      a.d-flex.text-decoration-none(href="/")
        v-img.align-end.white--text(:src="require('../../assets/SMMR.png')" width="100%" max-height="400")
      v-card-title Título gigantesco de um vídeo muito doido que botaram na plataforma
      v-card-subtitle Gabriel Carvalho
        v-icon.text--sencondary.ml-1(size="16") mdi-account-outline
      v-card-text Um texto gigante explicando 1bi de coisa que a gente vai precisar futuramente estará presente bem aqui, o que devo fazer??
      v-divider.mx-4
      v-card-title Links úteis
      v-card-text
        v-chip-group(column)
          custom-chip(plataform="Github" link="https://github.com")
          custom-chip(plataform="Slack" link="https://github.com")

</template>

<script>
import CustomChip from "./Chip.vue";

export default {
  components: {
    CustomChip,
  },
};
</script>
