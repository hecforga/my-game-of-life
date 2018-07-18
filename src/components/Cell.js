import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getCellAtPosition } from '../reducers';
import * as actions from '../actions';

class Cell extends Component {
  render() {
    const { cell } = this.props;

    return (
      <div className="box" style={{...styles.cell, backgroundColor: cell.alive ? 'lightgray' : 'black'}} />
    )
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