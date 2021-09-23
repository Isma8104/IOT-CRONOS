import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB4iREvuWZ18Wb7PLT34p3CDiQfZwnWEtw",
    libraries: "places"
  }
});