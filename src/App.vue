<template>
  <div class="footer-app">
    <footerLang></footerLang>
    <footerContent></footerContent>
  </div>
</template>

<script>
/* eslint-disable */
import footerContent from "./components/footerContent.vue";
import footerLang from "./components/footerLang.vue";
export default {
  name: "App",
  components: {
    footerContent,
    footerLang,
  },
};
</script>
<style>
body {
  margin: 0px;
  background-color: #383838;
}
.footer-app {
  padding: 0px;
}

@media only screen and (min-width: 700px) {
}
</style>
