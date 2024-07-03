import type { Square } from '@/types'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', {
  state: () => ({
    highlightedSquares: [] as Square[]
  }),

  actions: {
    updateHighlightedSquareState(square: Square) {
      // If the square has already been highlighted, unhighlight it - else highlight
      if (
        this.highlightedSquares.find(
          (highlightedSquare) => highlightedSquare.index === square.index
        )
      ) {
        this.highlightedSquares = this.highlightedSquares.filter(
          (highlightedSquare) => highlightedSquare.index !== square.index
        )
      } else {
        this.highlightedSquares.push(square)
      }
      return
    }
  }
})
