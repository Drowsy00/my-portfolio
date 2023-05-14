<template>
  <div class="about-continer">
    <h1>---ABOUT---</h1>
  </div>
  <div>
    <div ref="element" class="fade-in" :class="{ 'is-visible': isVisible }">
      画面内に入ったらフェードインします
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const options = {
      threshold: 0.5, // 要素が50％以上画面内に入ったらコールバックを実行
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      });
    }, options);
    observer.observe(this.$refs.element);
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 30px;
  font-family: "Bruno Ace", sans-serif;
}

.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.is-visible {
  opacity: 1;
}
</style>
