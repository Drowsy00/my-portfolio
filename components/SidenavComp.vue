<template>
  <div class="sidenav-container">
    <!-- サイドバーのバックドロップ背景 -->
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <!-- トランジション -->
    <transition name="slide-side">
      <!-- サイドナブ -->
      <div v-if="show" class="sidenav">
        <!-- ハンバーガーメニュー -->
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item">
            <NuxtLink to="/"><span>01</span>HOME</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about"><span>02</span>ABOUT</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/skills"><span>03</span>SKILLS</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact"><span>04</span>CONTACT</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/cui"><span>05</span>CUI mode</NuxtLink>
          </li>
        </ul>
        <div drawer-toggle-container>
          <div class="drawer-toggle" role="button" @click="$emit('close')">
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 50%;
  width: 100%;
  background-color: black;
  z-index: 10000;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateY(100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: #00ff00;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #fff;
}

.drawer-toggle-container {
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35px;
  width: 35px;
  cursor: pointer; */
  flex-direction: column;
  justify-content: space-around;
  flex-direction: column;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  display: flex;
}

.drawer-toggle {
  position: relative;
  left: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35px;
  width: 35px;
  cursor: pointer;
}

.bar {
  z-index: 100;
  height: 2px;
  background: #00ff00;
  transition: all 0.3s ease-in-out 0.5s;
}
.bar:nth-child(1) {
  transform: rotate(135deg) translateY(-10px);
  transform-origin: bottom;
}
.bar:nth-child(2) {
  transform: rotate(-135deg) translateY(10px);
  transform-origin: top;
}
</style>
