import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getCellAtPosition } from '../reducers';
import * as actions from '../actions';

class Cell extends Component {
  render() {
    const { cell } = this.props;

    return (
      <div
        className="box"
        style={{...styles.cell, backgroundColor: cell.active ? 'lightgray' : 'black'}}
        onClick={() => this.onCellClick(cell)}
      />
    )
  }

  onCellClick(cell) {
    const { isGameRunning } = this.props;

    if (!isGameRunning){
      if (cell.active) {
        this.deactivateCell();
      } else{
        this.activateCell();
      }
    }
  }

  activateCell() {
    const { xPos, yPos, activateCell } = this.props;

    activateCell(xPos, yPos);
  }

  deactivateCell() {
    const { xPos, yPos, deactivateCell } = this.props;

    deactivateCell(xPos, yPos);
  }
}

const styles = {
  cell: {
    width: 24,
    height: 24,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
  }
};

const mapStateToProps = (state, props) => ({
  cell: getCellAtPosition(state, props.xPos, props.yPos),
});

export default connect(
  mapStateToProps,
  actions,
)(Cell);