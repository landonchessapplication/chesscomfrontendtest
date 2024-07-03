import type { Square } from '@/types'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', {
  state: () => ({
    highlightedSquares: [] as Square[]
  }),

  actions: {
    updateHighlightedSquareState(square: Square) {
      const squareIsHighlighted = this.highlightedSquares.find(
        (highlightedSquare) => highlightedSquare.index === square.index
      )
      // If the square has already been highlighted, unhighlight it - else highlight
      if (squareIsHighlighted) {
        this.highlightedSquares = this.highlightedSquares.filter(
          (highlightedSquare) => highlightedSquare.index !== square.index
        )
      } else {
        this.highlightedSquares.push(square)
      }
    },
    resetHighlights() {
      this.highlightedSquares = []
    }
  }
})
