<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vue 3.6 Alpha + Vapor Mode" />

  <p>
    Check out
    <a href="https://vuejs.org/guide/" target="_blank">Vue Docs</a>, the official Vue.js guide.
  </p>
  <p class="vapor-info">
    🚀 This app is running on Vue 3.6 Alpha with Vapor Mode enabled for optimized performance!
  </p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.vapor-info {
  color: #42b883;
  font-weight: bold;
  background: linear-gradient(45deg, #42b883, #35495e);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.1em;
  margin-top: 2em;
}
</style>
