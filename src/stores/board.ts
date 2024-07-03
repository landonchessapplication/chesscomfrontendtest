import { generateBoard } from '@/helpers/generateSquares'
import type { Square } from '@/types'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', {
  state: () => ({
    board: generateBoard() as Square[]
  }),

  actions: {
    updateHighlightedSquareState(changedSquare: Square) {
      // If the square has already been highlighted, unhighlight it - else highlight
      this.board = this.board.map((square) => {
        if (square.index === changedSquare.index) {
          return { ...square, highlighted: !square.highlighted }
        } else return square
      })
    },
    resetHighlights() {
      this.board = this.board.map((square) => {
        return { ...square, highlighted: false }
      })
    }
  },
  getters: {
    highlightedSquares: (state) => {
      return state.board.filter((square) => square.highlighted)
    }
  }
})
