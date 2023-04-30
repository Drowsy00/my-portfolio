<template>
  <!-- ハンバーガーメニュー -->
  <!-- <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div> -->

  <div class="menu-btn" role="button" @click="$emit('toggle')">
    <span class="menu-btn__bar"></span>
    <span class="menu-btn__bar"></span>
    <span class="menu-btn__bar"></span>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .menu-btn {
    display: none;
  }
}

/* .menu-btn {
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: #00ff00;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  z-index: 999;
} */

.menu-btn {
  position: relative;
  top: 950%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: #00ff00;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  z-index: 999;
}

.menu-btn__bar {
  display: block;
  width: 25px;
  height: 2px;
  margin: 11px auto;
  background-color: #00ff00;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
}

.menu-btn__bar:last-child {
  margin-bottom: 0;
}

.menu-btn.is-active .menu-btn__bar:first-child {
  transform: translateY(12px) rotate(45deg);
}

.menu-btn.is-active .menu-btn__bar:nth-child(2) {
  opacity: 0;
}

.menu-btn.is-active .menu-btn__bar:last-child {
  transform: translateY(-12px) rotate(-45deg);
}
</style>
