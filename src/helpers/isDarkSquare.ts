import { BOARD_FILES, BOARD_RANKS } from '@/static'
import type { File, Rank } from '@/types'

export const isDarkSquare = (file: File[number], rank: Rank[number]) => {
  const rankIndex = BOARD_RANKS.indexOf(rank)
  const fileIndex = BOARD_FILES.indexOf(file)
  return (rankIndex + fileIndex) % 2 === 0
}
