import React from 'react';
import styles from './style.css';
import ListGroups from '../list-groups/index.jsx';
import ListFriends from '../list-friends/index.jsx';

export default class ListViewPortal extends React.Component {
  render() {
    return (
      <div className={styles.listViewPortal}>
        <ListGroups />
        <ListFriends />
      </div>
    );
  }
}