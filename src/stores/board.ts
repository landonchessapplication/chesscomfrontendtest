import { defineStore } from 'pinia'

interface BoardStore {
  highlightedSquares: string[]
}

export const useBoardStore = defineStore<string, BoardStore>('board', {
  state: () => ({
    highlightedSquares: []
  }),

  actions: {}
})
