import { updateItemAtPosition } from '../utilities/immutableUpdateFunctions';

const cell = (state, action) => {
  switch (action.type) {
    case 'CREATE_EMPTY_BOARD':
    case 'RESET_GAME':
      return {
        active: false,
      };
    default:
      return state;
  }
};

const row = (state, action) => {
  switch (action.type) {
    case 'CREATE_EMPTY_BOARD':
      return createNEmptyCells(state, action, action.numberOfColumns);
    case 'RESET_GAME':
      return createNEmptyCells(state, action, state[0].length);
    default:
      return state;
  }
};

const initialState = [];
const board = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_EMPTY_BOARD':
      return createNEmptyRows(state, action, action.numberOfRows);
    case 'RESET_GAME':
      return createNEmptyRows(state, action, state.length);
    case 'ACTIVATE_CELL':
      return activateCell(state, action.xPos, action.yPos);
    case 'DEACTIVATE_CELL':
      return deactivateCell(state, action.xPos, action.yPos);
    default:
      return state;
  }
};

export default board;

const createNEmptyRows = (state, action, numberOfRows) => {
  const rows = [];
  for (let i = 0; i < numberOfRows; i++) {
    rows.push(row(state, action));
  }
  return rows;
};

const createNEmptyCells = (state, action, numberOfColumns) => {
  const cells = [];
  for (let i = 0; i < numberOfColumns; i++) {
    cells.push(cell(state, action));
  }
  return cells;
};

const activateCell = (state, xPos, yPos) => {
  return updateItemAtPosition(state, yPos, updateItemAtPosition(state[yPos], xPos, { active: true }));
};

const deactivateCell = (state, xPos, yPos) => {
  return updateItemAtPosition(state, yPos, updateItemAtPosition(state[yPos], xPos, { active: false }));
};

export const getBoard = (state) =>
  state;

export const getCellAtPosition = (state, xPos, yPos) =>
  state[yPos][xPos];

export const getNumberOfActiveCells = (state) => {
  let count = 0;
  state.forEach(row => {
    row.forEach(cell => {
      if (cell.active) {
        count++;
      }
    });
  });
  return count;
};