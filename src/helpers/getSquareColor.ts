import { BOARD_FILES, BOARD_RANKS } from '@/static'
import type { File, Rank } from '@/types'

export const getSquareColor = (file: File[number], rank: Rank[number]) => {
  const rankIndex = BOARD_RANKS.indexOf(rank)
  const fileIndex = BOARD_FILES.indexOf(file)
  return rankIndex % 2 === 0 ? fileIndex % 2 === 1 : fileIndex % 2 === 0
}
