import * as fromBoard from './board';
import * as fromRunning from './running';
import * as fromStep from './step';

export const getBoard = (state) =>
  fromBoard.getBoard(state.board);

export const getCellAtPosition = (state, xPos, yPos) =>
  fromBoard.getCellAtPosition(state.board, xPos, yPos);

export const isGameRunning = (state) =>
  fromRunning.isGameRunning(state.running);

export const canGameStart = (state) =>
  !isGameRunning(state) && fromBoard.getNumberOfActiveCells(state.board) >= 3;

export const getStep = (state) =>
  fromStep.getStep(state.step);