<script setup vapor lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div class="vapor-features">
    <h3>🔥 Vapor Mode Features</h3>
    <ul>
      <li>✨ Faster rendering with optimized virtual DOM</li>
      <li>⚡ Improved hydration performance</li>
      <li>🚀 Better tree-shaking and bundle size</li>
      <li>💫 Enhanced compile-time optimizations</li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.vapor-features {
  text-align: left;
  max-width: 400px;
  margin: 2em auto;
  padding: 1.5em;
  border: 2px solid #42b883;
  border-radius: 8px;
  background: rgba(135, 184, 66, 0.1);
}

.vapor-features h3 {
  color: #42b883;
  margin-top: 0;
}

.vapor-features ul {
  list-style: none;
  padding: 0;
}

.vapor-features li {
  padding: 0.5em 0;
  color: #4f908d;
}
</style>
