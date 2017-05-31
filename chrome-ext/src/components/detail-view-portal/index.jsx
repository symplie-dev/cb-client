import React from 'react';
import styles from './style.css';
import DetailGroup from '../detail-group/index.jsx'
import DetailFriend from '../detail-friend/index.jsx'

export default class DetailViewPortal extends React.Component {
  render() {
    return (
      <div className={styles.detailViewPortal}>
        <DetailGroup />
        <DetailFriend />
      </div>
    );
  }
}