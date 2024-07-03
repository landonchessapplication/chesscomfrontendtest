import { BOARD_FILES, BOARD_RANKS } from '@/static'
import type { File, Rank } from '@/types'

/**
 * @description This function checks whether the square at a given file and rank is a dark square.
 * @param file The file to check
 * @param rank The rank to check
 * @returns {boolean} Whether the square is a dark square
 */
export const isDarkSquare = (file: File[number], rank: Rank[number]) => {
  const rankIndex = BOARD_RANKS.indexOf(rank)
  const fileIndex = BOARD_FILES.indexOf(file)
  return (rankIndex + fileIndex) % 2 === 1
}
