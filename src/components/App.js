import React, { Component } from 'react';
import {connect} from "react-redux";

import { isGameRunning } from '../reducers';
import * as actions from '../actions';

import Board from './Board';
import ControlsContainer from './ControlsContainer';

class App extends Component {
  render() {
    const { isGameRunning } = this.props;

    return (
      <div className="row">
        <div className="col" style={{flex: 1}}>
          <div className="row center">
            <div className="col">
              <div className="box">
                <h1 className={styles.title}>El Juego de la Vida</h1>
              </div>
            </div>
          </div>

          <div className="row center" style={styles.board}>
            <div className="col">
              <Board isGameRunning={isGameRunning} />
            </div>
          </div>

          <div className="row center">
            <div className="col">
              <ControlsContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    fontSize: '1.5em',
  },
  board: {
    marginBottom: 16,
  },
};

const mapStateToProps = (state) => ({
  isGameRunning: isGameRunning(state)
});

export default connect(
  mapStateToProps,
  actions,
)(App);
