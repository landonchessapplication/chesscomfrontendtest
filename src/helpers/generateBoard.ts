import { BOARD_FILES, BOARD_RANKS } from '@/static'
import { isDarkSquare } from './isDarkSquare'

/**
 * @description This function is used to generate the chess board
 * @returns {Board[]} The board array
 */
export const generateBoard = () => {
  return BOARD_RANKS.flatMap((rank, rankIndex) =>
    BOARD_FILES.map((file, fileIndex) => ({
      file,
      rank,
      index: rankIndex * BOARD_RANKS.length + fileIndex,
      isDarkSquare: isDarkSquare(file, rank),
      highlighted: false
    }))
  )
}
