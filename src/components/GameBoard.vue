<script setup lang="ts">
import { BOARD_FILES, BOARD_RANKS } from '@/static'
import type { File, Rank } from '@/types'
import { computed } from 'vue'
import GameSquare from '../components/GameSquare.vue'
const squares = computed(() => {
  return BOARD_RANKS.flatMap((rank) => BOARD_FILES.map((file) => ({ file, rank })))
})
const columns = computed(() => {
  return `repeat(${BOARD_FILES.length}, 1fr)`
})
const rows = computed(() => {
  return `repeat(${BOARD_RANKS.length}, 1fr)`
})
function handleSquareClick(file: File[number], rank: Rank[number]) {}
</script>

<template>
  <div class="board-container">
    <template v-for="(square, index) in squares" :key="index">
      <GameSquare :file="square.file" :rank="square.rank" @square-clicked="handleSquareClick" />
    </template>
  </div>
</template>

<style scoped>
.board-container {
  display: grid;
  max-height: 96vh;
  margin-top: 2vh;
  aspect-ratio: 1;
  margin: auto;
  grid-template-columns: v-bind(columns);
  grid-template-rows: v-bind(rows);
  border-radius: 8px;
  overflow: hidden; /*  overflow allows border radius to show */
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
</style>
