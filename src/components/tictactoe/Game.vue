<template>
  <div>
    <Board :cells="array" :handleClick="handleClick" />
    <div v-if="winner" class="absolute top-0 left-0 right-0 text-2xl font-bold text-orange-500">
      Winner is <span v-if="!xIsNext">X</span><span v-if="xIsNext">O</span>
    </div>
    <button
      class="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      @click="handleResetGame()"
    >
      Reset Game
    </button>
  </div>
</template>

<script>
import { calculateWinner } from "@/helper/helper";
import Board from "./Board.vue";
import "./GameStyles.css";
export default {
  components: {
    Board,
  },
  data() {
    return {
      array: Array(9).fill(),
      winner: "",
      xIsNext: true,
    };
  },
  methods: {
    handleClick(index) {
      const boardCopy = [...this.array];
      if (boardCopy[index] || this.winner) return;
      boardCopy[index] = this.xIsNext ? "X" : "O";
      this.array = boardCopy;
      this.xIsNext = !this.xIsNext;
      this.winnerIs();
    },
    winnerIs() {
      const winner = calculateWinner(this.array);
      this.winner = winner;
    },
    handleResetGame() {
      this.array = Array(9).fill();
      this.winner = "";
    },
  },
  //   mounted() {
  //     const winner = calculateWinner(this.array);
  //     this.winner = winner;
  //     console.log(this.winner);
  //   },
};
</script>

<style scoped></style>
