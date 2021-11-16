<template lang="pug">
  v-col(cols="12" md="4")
    v-card
      v-card-title Criar novo card
      v-card-text
        v-form(align="end" v-model="isValid" ref="form" lazy-validation)
          v-text-field(label="URL do vídeo" color="deep-purple accent-2" :rules="this.rules.video" v-model="card.videoURL" required :value="card.videoURL")
          v-text-field(label="Autor" color="deep-purple accent-2" :rules="this.rules.author" v-model="card.author" :value="card.author")
          v-text-field(label="Imagem (URL)" color="deep-purple accent-2" :rules="this.rules.image" v-model="card.imageURL" :value="card.imageURL")
          v-text-field(label="Título" color="deep-purple accent-2" :rules="this.rules.title" v-model="card.title" required :value="card.title")
          v-textarea(label="Descrição" color="deep-purple accent-2" :value="card.description" v-model="card.description" auto-grow)
          v-btn.white--text.prevent(color="deep-purple accent-2" type="submit" :disabled="!isValid" @click="this.submit") Adicionar card
</template>

<script>
import isURL from "validator/lib/isURL";
import UsefulLinks from "./UsefulLinks.vue";

export default {
  components: {
    UsefulLinks,
  },
  props: {
    status: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      card: {
        videoURL: "",
        imageURL: "",
        title: "",
        description: "",
        // TODO - Add a form to add Links at the video
        // items: [],
        // model: ["Github"],
      },
      rules: {
        video: [
          (v) => !!v || "Video URL is required",
          (v) => {
            if (v) {
              return isURL(v) || "Video URL needs to be an URL";
            }
            return false;
          },
        ],
        image: [
          (v) => {
            if (v) {
              return isURL(v) || "Image URL needs to be an URL";
            }
            return true;
          },
        ],
        title: [(v) => !!v || "Title is required"],
        author: [(v) => !!v || "Author is required"],
      },
      isValid: false,
      alert: false,
      search: null,
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      this.$refs.form.validate;

      if (this.$refs.form.validate()) {
        this.$emit("card-create");

        this.$store.commit("addVideo", this.card);
      }
    },
  },
  computed: {},
};
</script>
