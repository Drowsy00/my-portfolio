<template>
  <h1 class="page-title">index</h1>
  <IndexComp />

  <Skills />
  <About />

  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  />

  <Contact />
</template>

<script>
import IndexComp from "~/components/IndexComp.vue";
import Skills from "./skills.vue";
import About from "./about.vue";
import Contact from "./contact.vue";

export default {
  components: {
    IndexComp,
    Skills,
    About,
    Contact,
  },
};
</script>

<style scoped>
* {
  font-family: "Bruno Ace", sans-serif;
}
.aboutpage {
  margin-top: 200%;
}
</style>
