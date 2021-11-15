<template lang="pug">
  v-app-bar(app color="rgb(255, 255, 255, 0.95)" fixed)
    v-container.d-flex.justify-space-between.align-center(max-width="1440px")
      v-img(:src="require('../../assets/SMMR.png')" max-width="67px" alt="Summaryze")
      v-badge(dot overlap color="green lighten-2")
        v-avatar(color="purple lighten-5" size="42")
</template>

<script>
export default {};
</script>
