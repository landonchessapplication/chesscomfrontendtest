import type { File, Rank } from '@/types'
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
  it('Returns a dark square at A1', () => {
    // arrange
    const file: File[number] = 'a'
    const rank: Rank[number] = '1'
    const board = generateBoard()

    // act
    const result = board.find(
      (square) => square.file === file && square.rank === rank
    )?.isDarkSquare

    // assert
    expect(result).toBeTruthy()
  })
  it('Returns a light square at E4', () => {
    // arrange
    const file: File[number] = 'e'
    const rank: Rank[number] = '4'
    const board = generateBoard()

    // act
    const result = board.find(
      (square) => square.file === file && square.rank === rank
    )?.isDarkSquare

    // assert
    expect(result).not.toBeTruthy()

    // assert
    expect(result).not.toBeTruthy()
  })
})
