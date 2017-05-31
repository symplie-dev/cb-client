import React from 'react';
import styles from './style.css';
import ListContainer from '../list-container/index.jsx';
import DetailContainer from '../detail-container/index.jsx';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <ListContainer />
        <DetailContainer />
      </div>
    );
  }
}