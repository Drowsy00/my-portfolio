<template>
  <div class="text">
    <p v-if="isShow" class="loading">
      {{ randomString }}<br />
      {{ randomString }}<br />
      {{ randomString }}<span>---LOADING...---</span>{{ randomString }}<br />
      {{ randomString }}<br />
      {{ randomString }}
    </p>
    <div class="shful-div">
      <p v-if="randomShow" class="shful">{{ randomString }}</p>
    </div>
  </div>
</template>

<script>
export default {
  component: {},
  data() {
    return {
      isShow: false,
      randomShow: true,
      randomString: "",
      randomString2: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.randomShow = false;
      this.isShow = true;
    }, 1000);

    setInterval(() => {
      this.randomString = this.generateRandomString();
      this.randomString2 = this.generateRandomString2();
    }, 80);
  },
  methods: {
    generateRandomString() {
      let length = 100;
      let result = "";
      let characters = "-01";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    generateRandomString2() {
      let length = 40;
      let result = "";
      let characters = "-01";
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
.text {
  background-color: black;
  width: 100%;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  white-space: nowrap;
}

.loading {
  font-size: 30px;
  color: #00ff00;
}

.shful {
  font-size: 30px;
  color: #00ff00;
}

.shful-div {
  white-space: nowrap;
}
</style>
