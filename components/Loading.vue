<template>
  <div class="content">
    <transition name="fade">
      <p v-if="isShow" class="randomText">
        {{ randomString3 }}<br />
        {{ randomString2 }}<br />
        {{ randomString3 }}<br />
        {{ randomString2 }}<br />
        {{ randomString }}---
        <span class="loading">LOADING...</span>
        ---{{ randomString }}<br />
        {{ randomString3 }}<br />
        {{ randomString2 }}<br />
        {{ randomString3 }}<br />
        {{ randomString2 }}<br />
      </p>
    </transition>
    <!-- <div class="shful-div">
      <p v-if="randomShow" class="shful">{{ randomString }}</p>
    </div> -->
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
      randomString3: "",
    };
  },
  mounted() {
    setTimeout(() => {
      // this.randomShow = false;
      this.isShow = true;
    }, 300);

    setTimeout(() => {
      this.randomShow = false;
      this.isShow = false;
    }, 2700);

    setInterval(() => {
      this.randomString = this.generateRandomString();
      this.randomString2 = this.generateRandomString2();
      this.randomString3 = this.generateRandomString3();
    }, 90);
  },
  methods: {
    generateRandomString() {
      let length = 200;
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
    generateRandomString2() {
      let length = 200;
      let result = "";
      let characters = "-101010";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    generateRandomString3() {
      let length = 200;
      let result = "";
      let characters = "-111000";
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
/* font-family: "Bruno Ace", sans-serif; */
.content {
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

.randomText {
  font-size: 20px;
  color: #00ff00;
  font-family: "Titillium Web", sans-serif;
}

.loading {
  font-size: 35px;
  vertical-align: middle;
  font-family: "Bruno Ace", sans-serif;
}

/* 表示時の状態 */
.fade-enter-from {
  opacity: 0;
}
/* 表示時のアクティブ状態 */
.fade-enter-active {
  transition: all 0.5s;
}
/* 表示時の終了状態 */
.fade-enter-to {
  opacity: 1;
}
/* 非表示時の状態 */
.fade-leave-from {
  opacity: 1;
}
/* 非表示時のアクティブ状態 */
.fade-leave-active {
  transition: all 0.5s;
}
/* 非表示時の終了状態 */
.fade-leave-to {
  opacity: 0;
}
</style>
