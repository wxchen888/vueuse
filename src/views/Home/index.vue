<template>
  <div>
    <h2>store.count : {{ store.state.count }}</h2>
    <button @click="store.increment">+1</button>
    <button @click="store.decrease">-1</button>
  </div>
</template>
<script lang="ts" setup>
import { ComponentInternalInstance } from "vue";

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const store = proxy?.store;
</script>
<script lang="ts">
export default {
  name: "HomeComp"
};
</script>

<style lang="scss" scoped></style>
