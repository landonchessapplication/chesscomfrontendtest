<script setup lang="ts">
import { BOTTOM_RANK, LEFT_FILE } from '@/static'
import { useBoardStore } from '@/stores/board'
import type { Square } from '@/types'
import { computed } from 'vue'
const boardStore = useBoardStore()
const props = defineProps<{
  square: Square
}>()
const isSquareHighlighted = computed(() =>
  boardStore.highlightedSquares.some(
    (highlightedSquare) => props.square.index === highlightedSquare.index
  )
)
const emit = defineEmits<{
  (event: 'square-clicked', square: Square): void
}>()
</script>

<template>
  <div
    @click="emit('square-clicked', square)"
    class="game-square"
    :class="{
      'dark-square': square.isDarkSquare,
      'light-square': !square.isDarkSquare,
      highlighted: isSquareHighlighted
    }"
  >
    <div class="board-notation bottom-rank" v-if="square.rank === BOTTOM_RANK">
      {{ square.file }}
    </div>
    <div class="board-notation left-file" v-if="square.file === LEFT_FILE">
      {{ square.rank }}
    </div>
  </div>
</template>

<style scoped>
.game-square {
  height: 100%;
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  position: relative;
  cursor: pointer;
}

.board-notation {
  position: absolute;
  user-select: none;
}

.bottom-rank {
  right: 10%;
  bottom: 10%;
}

.left-file {
  left: 10%;
  top: 10%;
}

.game-square.light-square {
  background-color: #e6e6e6;
}

.game-square.light-square:hover {
  background-color: #ccc;
}

.game-square.light-square.highlighted {
  background-color: blue;
}

.game-square.dark-square {
  background-color: #7373b3;
}

.game-square.dark-square:hover {
  background-color: #50507d;
}
.game-square.dark-square.highlighted {
  background-color: purple;
}

.light-square .board-notation {
  color: #7373b3;
}

.dark-square .board-notation {
  color: #ccc;
}
</style>
