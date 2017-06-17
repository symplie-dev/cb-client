import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import ListGroups from '../list-groups/index.jsx';
import ListFriends from '../list-friends/index.jsx';

export default class ListViewPortal extends React.Component {
  render() {
    var portalStyles = [styles.listViewPortal];

    switch(this.props.selectedList) {
      case 'groups':
        portalStyles.push(styles.groups);
        break;
      case 'friends':
        portalStyles.push(styles.friends);
        break;
    }

    return (
      <div className={portalStyles.join(' ')}>
        <ListGroups />
        <ListFriends />
      </div>
    );
  }
}

ListViewPortal.propTypes = {
  selectedList: PropTypes.string.isRequired
};