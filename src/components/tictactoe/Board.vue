<template>
  <div class="game-board">
    <Cell
      v-for="(item, index) in cells"
      :key="index"
      :index="index"
      :value="item"
      :handleClick="handleClick"
      :className="item==='X'?'is-x':item==='O'?'is-o':''"
    ></Cell>
  </div>
</template>

<script>
import Cell from "./Cell.vue";
import { calculateWinner } from "../../helper/helper";
export default {
  components: {
    Cell,
  },
  props: ["cells", "handleClick"],
  data() {
    return {
      array: this.cells,
    };
  },
};
</script>

<style scoped></style>
