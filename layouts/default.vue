<template>
  <div>
    <transition name="fade">
      <LoadingComp v-if="isShow" />
    </transition>
  </div>
  <main>
    <HeaderComp @sidenavToggle="displaySidenav = !displaySidenav" />
    <SidenavComp :show="displaySidenav" @close="displaySidenav = false" />
    <slot />
  </main>
</template>

<script>
import LoadingComp from "@/components/LoadingComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import SidenavComp from "@/components/SidenavComp.vue";

export default {
  component: {
    LoadingComp,
    HeaderComp,
    SidenavComp,
  },
  data() {
    return {
      isShow: true,
      randomString: "",
      displaySidenav: false,
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

<style>
* {
  margin: 0;
  background: black;
  color: #00ff00;
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
