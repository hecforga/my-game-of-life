export const createEmptyBoard = (numberOfRows, numberOfColumns) => ({
  type: 'CREATE_EMPTY_BOARD',
  numberOfRows,
  numberOfColumns,
});

export const startGame = (maxSteps, waitTime) => (dispatch) => {
  dispatch({
    type: 'START_GAME',
  });
  for (let i = 1; i <= maxSteps + 1; i++) {
    setTimeout(() => {
      if (i <= maxSteps) {
        dispatch({
          type: 'PERFORM_NEXT_STEP',
          step: i,
        });
      }
      if (i > maxSteps) {
        dispatch({
          type: 'FINISH_GAME',
        });
      }
    }, i * waitTime);
  }
};

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