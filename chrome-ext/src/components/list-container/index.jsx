import React from 'react';
import styles from './style.css';
import ListHeader from '../list-header/index.jsx';
import ListViewPortal from '../list-view-portal/index.jsx';

export default class ListContainer extends React.Component {
  render() {
    return (
      <div className={styles.listContainer}>
        <ListHeader />
        <ListViewPortal />
      </div>
    );
  }
}