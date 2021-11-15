<template lang="pug">
  v-chip.align-center.purple.lighten-5(:href="link" target="_blank")
    v-icon(small) mdi-{{plataform.toLowerCase()}}
    v-chip-text.ml-1 {{plataform}}
    v-icon.ml-1(small) mdi-open-in-new
</template>

<script>
export default {
  props: {
    plataform: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>
