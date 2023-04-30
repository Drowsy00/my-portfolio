<template>
  <div class="header-container">
    <header class="the-header">
      <div class="logo">
        <span><nuxt-link to="/">Drowsy</nuxt-link></span>
        <!-- <span><RandomText /></span> -->
      </div>
      <!-- ハンバーガー(768px以上で非表示) -->
      <SideNavToggleComp @toggle="$emit('sidenavToggle')" />
      <TopScrollComp class="topscroll" />
      <!-- スペース -->
      <div class="spacer"></div>
      <!-- ナブアイテム(768px未満で非表示) -->
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <span><nuxt-link to="/">HOME</nuxt-link></span>
            <!-- <span><RandomText /></span> -->
          </li>
          <li class="nav-item">
            <span><nuxt-link to="/about">ABOUT</nuxt-link></span>
            <!-- <span><RandomText /></span> -->
          </li>
          <li class="nav-item">
            <span><nuxt-link to="/skills">SKILLS</nuxt-link></span>
            <!-- <span><RandomText /></span> -->
          </li>
          <li class="nav-item">
            <span><nuxt-link to="/contact">CONTACT</nuxt-link></span>
            <!-- <span><RandomText /></span> -->
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import SideNavToggleComp from "@/components/SideNavToggleComp.vue";
import RandomText from "./RandomText.vue";
import TopScrollComp from "./TopScrollComp.vue";

export default {
  data() {
    return {
      visible: false,
    };
  },
  components: {
    SideNavToggleComp,
    RandomText,
    TopScrollComp,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        this.visible = window.scrollY >= window.innerHeight;
      } else if (window.scrollY < window.innerHeight) {
        this.visible = !this.visible;
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .topscroll {
    display: none;
  }
}
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: linear-gradient(to right, #0f2027, #203a43, #2c5364); */
  background: black;
  z-index: 99;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
  font-family: "Bruno Ace", sans-serif;
}

.logo a {
  text-decoration: none;
  color: #00ff00;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
  font-family: "Bruno Ace", sans-serif;
}

.nav-item a {
  text-decoration: none;
  color: #00ff00;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #fff;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>
