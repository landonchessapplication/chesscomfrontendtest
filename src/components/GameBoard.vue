<script setup lang="ts">
import { generateSquares } from '@/helpers/generateSquares'
import { BOARD_FILES, BOARD_RANKS } from '@/static'
import { useBoardStore } from '@/stores/board'
import type { Square } from '@/types'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import GameSquare from '../components/GameSquare.vue'
const boardStore = useBoardStore()
const squares = computed(() => {
  return generateSquares()
})
const boardContainerMax = ref('0px')
const boardContainerWidth = ref('0px')
const columns = computed(() => {
  return `repeat(${BOARD_FILES.length}, 1fr)`
})
const rows = computed(() => {
  return `repeat(${BOARD_RANKS.length}, 1fr)`
})
function handleSquareClick(square: Square) {
  boardStore.updateHighlightedSquareState(square)
}
function getBoardContainerDimensions() {
  const boardContainer = document.getElementById('board-viewport')
  if (boardContainer) {
    const maxValue = Math.max(
      boardContainer.getBoundingClientRect().height,
      boardContainer.getBoundingClientRect().height
    )
    boardContainerMax.value = `${maxValue}px`
  }
}

onMounted(() => {
  window.addEventListener('resize', getBoardContainerDimensions)
  window.addEventListener('load', getBoardContainerDimensions)
})

onUnmounted(() => {
  window.removeEventListener('resize', getBoardContainerDimensions)
})
</script>

<template>
  <div class="board-container" id="board-viewport">
    <div class="board">
      <template v-for="(square, index) in squares" :key="index">
        <GameSquare :square="square" @square-clicked="handleSquareClick" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.board-container {
  flex-grow: 1;
  margin: auto;
  padding: 0 20px;
}
.board {
  margin: 0 20px;
  display: grid;
  margin: auto;
  aspect-ratio: 1;
  grid-template-columns: v-bind(columns);
  grid-template-rows: v-bind(rows);
  border-radius: 8px;
  overflow: hidden; /*  overflow allows border radius to show */
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  max-height: 90vh;
}
@media (max-width: 768px) {
  .board-container {
    padding: 20px;
    margin: unset;
    min-height: 50%;
    flex-grow: 0;
  }
  .board {
    flex-grow: 1;
    max-height: calc(v-bind('boardContainerMax') - 40px);
  }
}
</style>
