import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faCogs,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueMobileDetection from 'vue-mobile-detection'
import Vue2TouchEvents from 'vue2-touch-events'

library.add(faBars);
library.add(faTimes);
library.add(faCogs);
library.add(faInstagram);
library.add(faTwitter);
library.add(faVideo);
library.add(faYoutube);
library.add(faTwitch);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueMobileDetection)
Vue.use(Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 10,
  touchHoldTolerance: 400,
  swipeTolerance: 100,
  longTapTimeInterval: 400
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
