import React from 'react';
import styles from './style.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <h2>Sign Up</h2>
        <hr />
        <div className="row ptm pbl">
          <div className="col-lg-12">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="username" />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">submit</button>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="alert alert-info" role="alert">
              Your username is tied to your chrome account. The name you choose is the name that your friends will see.
            </div>
          </div>
        </div>
      </div>
    );
  }
}