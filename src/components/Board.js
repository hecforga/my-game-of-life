import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBoard } from '../reducers';
import * as actions from '../actions';

import Cell from './Cell';

class Board extends Component {
  componentWillMount() {
    const { numberOfRows, numberOfColumns, createEmptyBoard } = this.props;

    createEmptyBoard(numberOfRows, numberOfColumns);
  }

  render() {
    const { board, isGameRunning } = this.props;

    if (board.length === 0) {
      return (
        <div>Empty Board</div>
      );
    }

    return (
      <div className="row">
        <div className="col">
          {board.map((row, yPos) => (
            <div key={yPos} className="row">
              {row.map((cell, xPos) => (
                <div key={xPos} className="col">
                  <Cell isGameRunning={isGameRunning} xPos={xPos} yPos={yPos} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  board: getBoard(state),
});

export default connect(
  mapStateToProps,
  actions,
)(Board);