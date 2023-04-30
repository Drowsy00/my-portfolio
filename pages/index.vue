<template>
  <h1 class="text">index</h1>
  <div class="aboutpage"><About /></div>
  <Skills />
  <Contact />
</template>

<script>
import Skills from "./skills.vue";
import About from "./about.vue";
import Contact from "./contact.vue";

export default {
  components: {
    Skills,
    About,
    Contact,
  },
};
</script>

<style scoped>
.text {
  font-family: "Bruno Ace", sans-serif;
}
.aboutpage {
  margin-top: 200%;
}
</style>
