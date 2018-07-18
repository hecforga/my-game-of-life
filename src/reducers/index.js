import * as fromBoard from './board';
import * as fromRunning from './running';

export const getBoard = (state) =>
  fromBoard.getBoard(state.board);

export const getCellAtPosition = (state, xPos, yPos) =>
  fromBoard.getCellAtPosition(state.board, xPos, yPos);

export const isGameRunning = (state) =>
  fromRunning.isGameRunning(state.running);

export const canGameStart = (state) =>
  !isGameRunning(state) && fromBoard.getNumberOfActiveCells(state.board) >= 3;