import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBoard } from '../reducers';
import * as actions from '../actions';

import Cell from './Cell';

const NUMBER_OF_ROWS = 10;
const NUMBER_OF_COLUMNS = 10;

class Board extends Component {
  componentWillMount() {
    const { createEmptyBoard } = this.props;

    createEmptyBoard(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS);
  }

  render() {
    const { board } = this.props;

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
                  <Cell xPos={xPos} yPos={yPos} />
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