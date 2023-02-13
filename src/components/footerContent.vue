<template>
  <section class="footer-content">
    <div class="footer-navigation">
      <button
        :class="[
          'footer-navigation-button',
          { 'footer-navigation-button-active': active.index === index },
        ]"
        v-for="(content, index) in selLang.contents"
        :key="index"
        @click="handleClick(index, content)"
      >
        {{ content.title }}
      </button>
    </div>

    <div class="footer-description">
      <h4>{{ active.title }}</h4>
      <p>{{ active.body }}</p>
    </div>
  </section>
</template>

<script>
/* eslint-disable */

import { mapGetters, mapActions } from "vuex";
export default {
  name: "footerContent",
  computed: mapGetters(["selLang"]),
  data() {
    return {
      active: {
        index: 0,
        body: "",
        title: "",
      },
      content: {},
    };
  },

  methods: {
    handleClick(i, content) {
      this.active.index = i;
      this.active.body = content.body;
      this.active.title = content.title;
    },
  },
  mounted() {
    this.handleClick(0, this.selLang.contents[0]);
  },
  updated() {
    this.handleClick(
      this.active.index,
      this.selLang.contents[this.active.index]
    );
  },
};
</script>
<style>
.footer-content {
  background-color: #383838;
  padding: 20px;
}
.footer-navigation {
  max-width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  background-color: #383838;
}
.footer-navigation-button {
  cursor: pointer;
  border: none;
  padding-bottom: 10px;
  font-family: Sans-serif;
  font-size: 12px;
  text-decoration: none;
  color: var(--white);
  background-color: #383838;
}
.footer-navigation-button-active {
  border-bottom: 2px solid white;
}
.footer-description {
  font-family: sans-serif;
  font-weight: lighter;
  max-width: 100%;
  height: 100%;
  color: white;
  background-color: #383838;
}

@media only screen and (min-width: 700px) {
  .footer-content {
    padding: 34px 84px;
  }
  .footer-navigation-button {
    font-size: 20px;
  }
}
</style>
