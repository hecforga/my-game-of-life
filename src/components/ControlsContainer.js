import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { canGameStart } from '../reducers';
import * as actions from '../actions';

class ControlsContainer extends Component {
  render() {
    const { canGameStart } = this.props;

    return (
      <div className="row">
        <div className="col" style={styles.withMarginRight}>
          <div className="box">
            <Button variant="contained" disabled={!canGameStart} onClick={() => this.onEmpezarClick()}>Empezar</Button>
          </div>
        </div>
        <div className="col">
          <div className="box">
            <Button variant="contained" onClick={() => this.onResetearClick()}>Resetear</Button>
          </div>
        </div>
      </div>
    )
  }

  onEmpezarClick() {
    const { startGame } = this.props;

    startGame();
  }

  onResetearClick() {
    const { resetGame } = this.props;

    resetGame();
  }
}

const styles = ({
  withMarginRight: {
    marginRight: 16,
  },
});

const mapStateToProps = (state) => ({
  canGameStart: canGameStart(state),
});

export default connect(
  mapStateToProps,
  actions,
)(ControlsContainer);