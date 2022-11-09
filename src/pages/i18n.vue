<template>
  <div>
    <h2>{{ hello }}</h2>
    <Teleport to="#hwd">
      <div>A</div>
    </Teleport>
    <Teleport to="#hwd">
      <div>B</div>
    </Teleport>
  </div>
</template>
<script lang="ts" setup>
import { transOptions } from "@/models/use-i18n";
import { i18n } from "@/models/use-i18n";

const i18 = inject(i18n) as typeof transOptions;
const hello = i18["common"].button;
</script>
<script lang="ts">
export default {
  name: "I18nComp"
};
</script>
<style lang="scss" scoped></style>
