const initialState = [];

const cell = (state, action) => {
  switch (action.type) {
    case 'CREATE_EMPTY_BOARD':
      return {
        alive: false,
      };
    default:
      return state;
  }
};

const row = (state, action) => {
  switch (action.type) {
    case 'CREATE_EMPTY_BOARD':
      const cells = [];
      for (let i = 0; i < action.numberOfColumns; i++) {
        cells.push(cell(state, action));
      }
      return cells;
    default:
      return state;
  }
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_EMPTY_BOARD':
      const rows = [];
      for (let i = 0; i < action.numberOfRows; i++) {
        rows.push(row(state, action));
      }
      return rows;
    default:
      return state;
  }
};

export default board;

export const getBoard = (state) =>
  state;

export const getCellAtPosition = (state, xPos, yPos) => {
  return state[yPos][xPos];
};