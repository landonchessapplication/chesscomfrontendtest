export const BOARD_RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'] as const
export const BOARD_FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

// Uncomment (+ comment out above) for a 4x4 board
// export const BOARD_RANKS = ['4', '3', '2', '1'] as const
// export const BOARD_FILES = ['a', 'b', 'c', 'd'] as const

export const BOTTOM_RANK = '1' as const
export const LEFT_FILE = 'a' as const

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
  }
}

//6A9B41
