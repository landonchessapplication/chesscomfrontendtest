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
    <h5 class="board-notation bottom-rank" v-if="square.rank === BOTTOM_RANK">
      {{ square.file }}
    </h5>
    <h5 class="board-notation left-file" v-if="square.file === LEFT_FILE">
      {{ square.rank }}
    </h5>
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
/* Only add hover events if device has hover */
@media (hover: hover) {
  .game-square.light-square:hover {
    background-color: var(--light-square-hover);
  }
  .game-square.dark-square:hover {
    background-color: var(--dark-square-hover);
  }
}

.game-square.light-square {
  background-color: var(--light-square);
}

.game-square.light-square.highlighted {
  background-color: var(--light-square-highlighted);
}

.game-square.dark-square {
  background-color: var(--dark-square);
}

.game-square.dark-square.highlighted {
  background-color: var(--dark-square-highlighted);
}

.light-square .board-notation {
  color: var(--dark-square);
}

.light-square.highlighted .board-notation {
  color: var(--light-square-hover);
}

.dark-square .board-notation {
  color: var(--light-square);
}

@media (max-width: 768px) {
  .board-notation {
    font-size: 14px;
  }
}
</style>
