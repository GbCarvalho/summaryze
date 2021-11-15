import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import pt from "vuetify/lib/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg",
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
});
