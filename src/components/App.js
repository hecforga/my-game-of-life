import React, { Component } from 'react';

class App extends Component {
  render() {
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
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    fontSize: '1.5em',
  },
};

export default App;
