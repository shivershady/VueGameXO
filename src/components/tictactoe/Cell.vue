<template>
  <div class="game-cell" :class="this.className" @click="handleClick(index)">
    {{this.value}}
  </div>
</template>

<script>
export default {
  props: ["value" , "index", "handleClick","className"],
};
</script>

<style scoped></style>
