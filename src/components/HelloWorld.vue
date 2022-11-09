<script setup lang="ts">
defineProps<{ msg: string }>();

const { x, y } = useMouse();
const { count, inc, dec } = useCounter();
</script>

<template>
  <div id="hwd">
    <h1>{{ msg }}</h1>

    <div class="card">
      <h3>Mouse: {{ x }} x {{ y }}</h3>
      <h3>
        Counter: {{ count }}
        <a @click="inc()" style="margin-right: 10px; cursor: pointer">+</a>
        <a @click="dec()" style="cursor: pointer">-</a>
      </h3>
    </div>
  </div>
</template>

<style scoped></style>
