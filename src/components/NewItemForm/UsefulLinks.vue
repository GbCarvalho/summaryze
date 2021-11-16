<template lang="pug">
  v-combobox(
            v-model="card.model"
            :items="card.items"
            :search-input.sync="search"
            hide-selected
            label="Links extras"
            multiple
            persistent-hint
            small-chips
            )
            template(v-slot:no-data)
              v-list-item
                v-list-item-content
                  v-list-item-title Não há nenhum resultado para "<strong>{{ search }}</strong>". Pressione <kbd>enter</kbd> para criar um novo registro.
            template(v-slot:selection="data")
              v-chip(:key="JSON.stringify(data.item)" v-bind="data.attrs" :input-value="data.selected" :disabled="data.disabled" @click:close="data.parent.selectItem(data.item)")
                v-icon(left) mdi-{{data.item.toLowerCase()}}
                p {{ data.item }}
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
};
</script>
