import { describe, expect, it } from 'vitest'

import { generateBoard } from '../generateBoard'

describe('generateBoard', () => {
  it('Returns a board that contains 64 squares', () => {
    const board = generateBoard()
    expect(board).toHaveLength(64)
  })

  it('Returns a board without any highlighted squares', () => {
    const board = generateBoard()
    expect(board.every((square) => square.highlighted)).not.toBeTruthy()
  })
})
