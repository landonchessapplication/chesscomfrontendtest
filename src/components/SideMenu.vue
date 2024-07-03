<script setup lang="ts">
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { useBoardStore } from '@/stores/board'

const boardStore = useBoardStore()
</script>

<template>
  <div id="side-menu">
    <h4 v-if="boardStore.highlightedSquares.length === 0">
      No squares selected. Click on a square to begin tracking moves.
    </h4>
    <div v-else class="move-list-header">
      <h2>Selected Squares</h2>
      <button @click="boardStore.resetHighlights()">Reset</button>
    </div>
    <ul class="move-list">
      <li
        v-for="(highlightedSquare, index) in boardStore.highlightedSquares"
        :key="highlightedSquare.index"
      >
        <h5>
          {{ `${index + 1}. ${highlightedSquare.file}${highlightedSquare.rank}` }}
        </h5>
      </li>
    </ul>

    <ThemeSwitch />
  </div>
</template>

<style scoped>
#side-menu {
  --padding: 16px;
  width: 300px;
  color: #e3e3e3;
  background-color: #222;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  max-height: 100%;
  position: relative;
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.move-list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  overflow-y: auto;
  flex-grow: 1;
  margin: 16px 0 0 16px;
}
.move-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  /* Apply styles for smaller screens */
  #side-menu {
    width: calc(100% - (var(--padding) * 2));
    min-height: 200px;
    flex-grow: 1;
  }
}
</style>
