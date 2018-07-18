export const createEmptyBoard = (numberOfRows, numberOfColumns) => ({
  type: 'CREATE_EMPTY_BOARD',
  numberOfRows,
  numberOfColumns,
});

export const startGame = () => ({
  type: 'START_GAME',
});

export const resetGame = () => ({
  type: 'RESET_GAME',
});

export const activateCell = (xPos, yPos) => ({
  type: 'ACTIVATE_CELL',
  xPos,
  yPos,
});

export const deactivateCell = (xPos, yPos) => ({
  type: 'DEACTIVATE_CELL',
  xPos,
  yPos,
});