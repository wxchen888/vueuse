<script setup lang="ts">
import HomeComp from "./views/Home/index.vue";
import AboutComp from "./views/About/index.vue";
import NotFoundComp from "./views/404/index.vue";
import HelloWorld from "./components/HelloWorld.vue";
import i18nVue from "./pages/i18n.vue";

const routes = {
  "/": HomeComp,
  "/about": AboutComp,
  "/i18n": i18nVue
};
const currentPath = ref(window.location.hash);
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});
const currentView = computed(() => {
  const route = routes[currentPath.value.slice(1) || "/"];
  return route || NotFoundComp;
});
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <a href="#/">Home</a> | <a href="#/about">About</a> |
  <a href="#/i18n">I18n</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <transition name="fade" mode="out-in">
    <component :is="currentView" />
  </transition>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
