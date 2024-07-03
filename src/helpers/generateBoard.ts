import { BOARD_FILES, BOARD_RANKS } from '@/static'

/**
 * @description This function checks whether the square at a given file and rank is a dark square.
 * On even files (b,d,f,h), even ranks (2,4,6,8) are considered dark
 * On odd files (a,c,e,g) odd ranks (1,3,5,7) are considered dark
 * @param fileIndex {number} The fileIndex to check
 * @param rankIndex {number} The rankIndex to check
 * @returns {boolean} Whether the square is a dark square
 */
const isDarkSquare = (fileIndex: number, rankIndex: number) => {
  return (rankIndex + fileIndex) % 2 === 1
}

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
      isDarkSquare: isDarkSquare(fileIndex, rankIndex),
      highlighted: false
    }))
  )
}
