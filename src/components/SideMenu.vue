<script setup lang="ts">
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { useBoardStore } from '@/stores/board'

const boardStore = useBoardStore()
</script>

<template>
  <div id="side-menu">
    <div v-if="boardStore.highlightedSquares.length === 0">
      No squares selected. Click on a square to begin tracking moves.
    </div>
    <div v-else class="move-list-header">
      <div>Selected Squares</div>
      <button @click="boardStore.resetHighlights()">Reset</button>
    </div>
    <div class="move-list">
      <template
        v-for="(highlightedSquare, index) in boardStore.highlightedSquares"
        :key="highlightedSquare.index"
      >
        <div>
          {{ `${index + 1}. ${highlightedSquare.file}${highlightedSquare.rank}` }}
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
  position: relative;
  padding: 20px;
}
.move-list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-height: calc(100% - 80px);
  overflow-y: auto;
}
.move-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  /* Apply styles for smaller screens */
  #side-menu {
    width: calc(100% - 40px);
    min-height: 200px;
    flex-grow: 1;
  }
}
</style>
