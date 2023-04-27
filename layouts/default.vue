<template>
  <div>
    <transition name="fade">
      <Loading v-if="isShow" />
    </transition>

    <!-- <h2>{{ randomString }}</h2> -->
  </div>
  <main>
    <nav>ここにナビゲーションバーを入れる</nav>
    <slot />
  </main>
</template>

<script>
import Loading from "~/components/Loading.vue";

export default {
  component: {
    Loading,
  },
  data() {
    return {
      isShow: true,
      randomString: "",
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false;
      }, 3000);
    });
    setInterval(() => {
      this.randomString = this.generateRandomString();
    }, 50);
  },
  methods: {
    generateRandomString() {
      let length = 100;
      let result = "";
      let characters = "-01/¥|@+=?!.,:;";
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
.sh-text {
  color: black;
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
