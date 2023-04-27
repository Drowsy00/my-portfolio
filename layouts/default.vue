<template>
  <div>
    <Loading v-if="isShow" />
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
      }, 2000);
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
</style>
