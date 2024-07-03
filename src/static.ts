export const BOARD_RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'] as const
export const BOARD_FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

export const BOTTOM_RANK = BOARD_RANKS[BOARD_RANKS.length - 1]
export const LEFT_FILE = BOARD_FILES[0]

export const THEMES = {
  Default: {
    'background-color': '#7393b3',
    'light-square': '#e6e6e6',
    'light-square-hover': '#ccc',
    'light-square-highlighted': '#8bc1da',
    'dark-square': '#7373b3',
    'dark-square-hover': '#8A8AC2',
    'dark-square-highlighted': '#2e2aac'
  },
  Checkered: {
    'background-color': '#777',
    'light-square': '#eee',
    'light-square-hover': '#ccc',
    'light-square-highlighted': '#F2613F',
    'dark-square': '#0C0C0C',
    'dark-square-hover': '#4e4e4e',
    'dark-square-highlighted': '#9B3922'
  },
  'Chess.com': {
    'background-color': '#302E2B',
    'light-square': '#F3F3F4',
    'light-square-hover': '#CCC',
    'light-square-highlighted': '#F9F8A1',
    'dark-square': '#6A9B41',
    'dark-square-hover': '#557C34',
    'dark-square-highlighted': '#B6CD3E'
  },
  Pastel: {
    'background-color': '#FEE5D8',
    'light-square': '#FFD3C8',
    'light-square-hover': '#FFB8A8',
    'light-square-highlighted': '#FFEBDF',
    'dark-square': '#5C2C2F',
    'dark-square-hover': '#853031',
    'dark-square-highlighted': '#3F1D20'
  }
}

//6A9B41
