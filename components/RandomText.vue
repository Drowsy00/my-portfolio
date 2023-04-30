<template>
  <p class="randomText">
    {{ randomString }}
  </p>
</template>

<script>
export default {
  component: {},
  data() {
    return {
      randomString: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.randomString = this.generateRandomString();
    }, 90);
  },
  methods: {
    generateRandomString() {
      let length = 10;
      let result = "";
      let characters = "-010101";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
};
</script>

<style scoped>
.randomText {
  font-size: 16px;
  color: #00ff00;
  font-family: "Titillium Web", sans-serif;
  align-items: center;
  vertical-align: middle;
}
</style>
