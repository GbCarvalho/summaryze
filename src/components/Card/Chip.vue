<template lang="pug">
  v-chip.align-center.purple.lighten-5(:href="link" target="_blank")
    v-icon(small).mr-1 mdi-{{plataform.toLowerCase()}}
    slot
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
