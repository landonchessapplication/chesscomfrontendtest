import type { File, Rank } from '@/types'
import { describe, expect, it } from 'vitest'
import { isDarkSquare } from './../isDarkSquare'

describe('isDarkSquare', () => {
  it('Returns true for A1', () => {
    // arrange
    const file: File[number] = 'a'
    const rank: Rank[number] = '1'

    // act
    const result = isDarkSquare(file, rank)

    // assert
    expect(result).toBeTruthy()
  })
  it('Returns false for E4', () => {
    // arrange
    const file: File[number] = 'e'
    const rank: Rank[number] = '4'

    // act
    const result = isDarkSquare(file, rank)

    // assert
    expect(result).not.toBeTruthy()
  })
})
