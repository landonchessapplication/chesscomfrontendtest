<script setup lang="ts">
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { useBoardStore } from '@/stores/board'

const boardStore = useBoardStore()
</script>

<template>
  <div id="side-menu">
    <div class="move-list">
      <div v-if="boardStore.highlightedSquares.length === 0">
        No squares highlighted. Click on a square to begin tracking moves.
      </div>
      <div v-else class="move-list-header">
        <div>Highlighted Squares:</div>
        <button @click="boardStore.resetHighlights()">Reset</button>
      </div>

      <template
        v-for="(highlightedSquare, index) in boardStore.highlightedSquares"
        :key="highlightedSquare.index"
      >
        <div>
          {{ `${index + 1}: ${highlightedSquare.file}${highlightedSquare.rank}` }}
        </div>
      </template>

      <ThemeSwitch />
    </div>
  </div>
</template>

<style scoped>
#side-menu {
  width: 300px;
  color: #e3e3e3;
  background-color: #222;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  max-height: 100%;
  overflow: auto;
  position: relative;
}
.move-list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 20px;
}
.move-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  /* Apply styles for smaller screens */
  #side-menu {
    width: 100%;
    min-height: 200px;
  }
}
</style>
