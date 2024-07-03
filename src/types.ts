import type { BOARD_FILES, BOARD_RANKS } from './static'

export type File = typeof BOARD_FILES
export type Rank = typeof BOARD_RANKS

export interface Square {
  file: File[number]
  rank: Rank[number]
  index: number
  isDarkSquare: boolean
  highlighted: boolean
}
