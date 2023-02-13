<template>
  <div class="language-navigation">
    <button class="language-navigation-button" @click="[selectLanguage('eng')]">
      ENGLISH
    </button>
    <button
      class="language-navigation-button"
      @click="[selectLanguage('thai')]"
    >
      THAI
    </button>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";
export default {
  name: "footerLang",
  methods: {
    ...mapActions(["selectLanguage"]),
  },
};
</script>
<style>
.language-navigation {
  padding: 0px 84px;
  max-width: 100%;
  color: white;
  display: flex;
  justify-content: space-around;
  background-color: #383838;
}
.language-navigation-button {
  width: 100%;
  cursor: pointer;
  border: 1px solid white;
  padding: 10px;
  font-family: Sans-serif;
  font-size: 12px;
  text-decoration: none;
  color: var(--white);
  background-color: #383838;
}
</style>
