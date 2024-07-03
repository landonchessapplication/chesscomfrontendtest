import { BOARD_FILES, BOARD_RANKS } from '@/static'
import { getSquareColor } from './getSquareColor'

export const generateSquares = () => {
  return BOARD_RANKS.flatMap((rank, rankIndex) =>
    BOARD_FILES.map((file, fileIndex) => ({
      file,
      rank,
      index: rankIndex * 8 + fileIndex,
      isDarkSquare: getSquareColor(file, rank)
    }))
  )
}
