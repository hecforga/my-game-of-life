import * as fromBoard from './board.js';

export const getBoard = (state) =>
  fromBoard.getBoard(state.board);

export const getCellAtPosition = (state, xPos, yPos) =>
  fromBoard.getCellAtPosition(state.board, xPos, yPos);