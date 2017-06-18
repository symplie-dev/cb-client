import React from 'react';
import styles from './style.css';
import DetailViewPortal from '../detail-view-portal/index.jsx'

export default class DetailContainer extends React.Component {
  render() {
    return (
      <div className={styles.detailContainer}>
        <DetailViewPortal />
      </div>
    );
  }
}