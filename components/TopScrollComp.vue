<template>
  <div
    class="scroll-top-button"
    v-show="scrollTop >= scrollTrigger"
    @click="scrollToTop"
  >
    <div class="scroll-top-icon"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      scrollTrigger: 1, // ボタンを表示するスクロール位置
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollTop = window.scrollY;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.scroll-top-button {
  position: absolute;
  top: 850%;
  left: 80%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
  display: flex;
  opacity: 0.8;
}

.scroll-top-icon {
  width: 30px;
  height: 30px;
  position: relative;
  background-color: #333;
}

.scroll-top-icon {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #00ff00;
}
</style>
