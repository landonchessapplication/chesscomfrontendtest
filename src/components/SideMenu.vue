<script setup lang="ts">
import { useBoardStore } from '@/stores/board'

const boardStore = useBoardStore()
</script>

<template>
  <div class="sidemenu">
    <div class="move-list">
      <div v-if="boardStore.highlightedSquares.length === 0">
        No squares highlighted. Click on a square to begin tracking moves.
      </div>
      <template
        v-for="(highlightedSquare, index) in boardStore.highlightedSquares"
        :key="highlightedSquare.index"
      >
        <div>
          {{ `${index + 1}: ${highlightedSquare.file}${highlightedSquare.rank}` }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.sidemenu {
  width: 300px;
  padding: 20px;
  color: #ccc;
  background-color: #7373b3;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.move-list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-height: 100%;
  overflow: auto;
}

@media (max-width: 768px) {
  /* Apply styles for smaller screens */
  .sidemenu {
    width: 100%;
    flex-grow: 1;
  }
}
</style>
