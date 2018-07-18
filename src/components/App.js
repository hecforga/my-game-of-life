import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isGameRunning, getStep } from '../reducers';
import * as actions from '../actions';

import Board from './Board';
import ControlsContainer from './ControlsContainer';

const NUMBER_OF_ROWS = 10;
const NUMBER_OF_COLUMNS = 10;
const MAX_STEPS = 6;
const WAIT_TIME = 1000;

class App extends Component {
  render() {
    const { isGameRunning, step } = this.props;

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

          <div className="row center" style={styles.withMarginBottom}>
            <div className="col">
              <Board numberOfRows={NUMBER_OF_ROWS} numberOfColumns={NUMBER_OF_COLUMNS} isGameRunning={isGameRunning} />
            </div>
          </div>

          <div className="row center" style={styles.withMarginBottom}>
            <div className="col">
              {isGameRunning ?
                <div className="box">{'Paso ' + step + ' de ' + MAX_STEPS}</div>
                :
                <div className="box">Selecciona al menos 3 celdas y empieza a jugar</div>
              }
            </div>
          </div>

          <div className="row center">
            <div className="col">
              <ControlsContainer maxSteps={MAX_STEPS} waitTime={WAIT_TIME} />
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
  withMarginBottom: {
    marginBottom: 16,
  },
};

const mapStateToProps = (state) => ({
  isGameRunning: isGameRunning(state),
  step: getStep(state),
});

export default connect(
  mapStateToProps,
  actions,
)(App);
