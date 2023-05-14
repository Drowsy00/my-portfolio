<template>
  <div class="footer-container">
    <footer class="the-footer">
      <p>Copyright 2023. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.the-footer {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: linear-gradient(to right, #0f2027, #203a43, #2c5364); */
  background: black;
  color: aliceblue;
  z-index: 99;
  box-sizing: border-box;
  padding: 0 20px;
}

.the-footer p {
  color: aliceblue;
}
</style>
