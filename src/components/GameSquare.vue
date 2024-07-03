<script setup lang="ts">
import { BOARD_FILES, BOARD_RANKS, BOTTOM_RANK, LEFT_FILE } from '@/static'
import type { File, Rank } from '@/types'
import { computed } from 'vue'

const props = defineProps<{
  file: File[number]
  rank: Rank[number]
}>()
const emit = defineEmits<{
  (event: 'square-clicked', file: File[number], rank: Rank[number]): void
}>()
const darkSquare = computed(() => {
  const rankIndex = BOARD_RANKS.indexOf(props.rank)
  const fileIndex = BOARD_FILES.indexOf(props.file)
  console.log(rankIndex, rankIndex % 2 === 0)
  console.log(fileIndex)
  return rankIndex % 2 === 0 ? fileIndex % 2 === 1 : fileIndex % 2 === 0
})
</script>

<template>
  <div
    @click="emit('square-clicked', file, rank)"
    class="game-square"
    :class="{
      'dark-square': darkSquare,
      'light-square': !darkSquare
    }"
  >
    <div class="board-notation bottom-rank" v-if="rank === BOTTOM_RANK">
      {{ file }}
    </div>
    <div class="board-notation left-file" v-if="file === LEFT_FILE">
      {{ rank }}
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

.game-square.dark-square {
  background-color: #7373b3;
}

.game-square.dark-square:hover {
  background-color: #50507d;
}

.light-square .board-notation {
  color: #7373b3;
}

.dark-square .board-notation {
  color: #ccc;
}
</style>
