<template>
  <div>
    <div ref="element1">要素1</div>
    <div ref="element2">要素2</div>
    <div ref="element3">要素3</div>
  </div>
</template>

<script>
export default {
  mounted() {
    const observer1 = new IntersectionObserver(this.handleIntersection1, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    observer1.observe(this.$refs.element1);

    const observer2 = new IntersectionObserver(this.handleIntersection2, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    observer2.observe(this.$refs.element2);

    const observer3 = new IntersectionObserver(this.handleIntersection3, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    observer3.observe(this.$refs.element3);
  },
  methods: {
    handleIntersection1(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("要素1が画面内に入りました。");
        } else {
          console.log("要素1が画面外に出ました。");
        }
      });
    },
    handleIntersection2(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("要素2が画面内に入りました。");
        } else {
          console.log("要素2が画面外に出ました。");
        }
      });
    },
    handleIntersection3(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("要素3が画面内に入りました。");
        } else {
          console.log("要素3が画面外に出ました。");
        }
      });
    },
  },
};
</script>
