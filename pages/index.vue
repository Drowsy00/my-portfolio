<template>
  <h1 class="page-title">index</h1>
  <IndexComp />
  <div class="page">
    <Skills />
  </div>
  <div class="page">
    <About />
  </div>
  <div class="page">
    <Contact />
  </div>
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  />
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

.page {
  margin-bottom: 100px;
}
</style>
