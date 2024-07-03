<script setup lang="ts">
import { generateBoard } from '@/helpers/generateBoard'
import { BOARD_FILES, BOARD_RANKS } from '@/static'
import { useBoardStore } from '@/stores/board'
import type { Square } from '@/types'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import GameSquare from '../components/GameSquare.vue'
const boardStore = useBoardStore()
const boardContainerMax = ref('0px')
const board = computed(() => {
  return generateBoard()
})
const gridColumns = computed(() => {
  return `repeat(${BOARD_FILES.length}, 1fr)`
})
const gridRows = computed(() => {
  return `repeat(${BOARD_RANKS.length}, 1fr)`
})
function handleSquareClick(square: Square) {
  boardStore.updateHighlightedSquareState(square)
}
function getBoardContainerDimensions() {
  const boardContainer = document.getElementById('board-viewport')
  if (boardContainer) {
    boardContainerMax.value = `${boardContainer.getBoundingClientRect().height}px`
  }
}

onMounted(() => {
  window.addEventListener('resize', getBoardContainerDimensions)
  window.addEventListener('load', getBoardContainerDimensions)
})

onUnmounted(() => {
  window.removeEventListener('resize', getBoardContainerDimensions)
  window.removeEventListener('load', getBoardContainerDimensions)
})
</script>

<template>
  <div class="board-container" id="board-viewport">
    <div class="board">
      <template v-for="square in board" :key="square.index">
        <GameSquare :square="square" @square-clicked="handleSquareClick" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.board-container {
  --padding: 16px;
  flex-grow: 1;
  margin: auto;
  padding: 0 var(--padding);
}
.board {
  margin: 0 16px;
  display: grid;
  margin: auto;
  aspect-ratio: 1;
  grid-template-columns: v-bind(gridColumns);
  grid-template-rows: v-bind(gridRows);
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
    padding: var(--padding);
    margin: unset;
    min-height: 50%;
    flex-grow: 0;
  }
  .board {
    flex-grow: 1;
    max-height: calc(v-bind('boardContainerMax') - (var(--padding) * 2));
  }
}
</style>
