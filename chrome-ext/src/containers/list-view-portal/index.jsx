import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import ListGroups from '../list-groups/index.jsx';
import ListFriends from '../list-friends/index.jsx';

export default class ListViewPortal extends React.Component {

  constructor(props) {
    super(props);
  }

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
        <ListGroups groups={this.props.groups} />
        <ListFriends />
      </div>
    );
  }
}

ListViewPortal.propTypes = {
  selectedList: PropTypes.string.isRequired,
  groups: PropTypes.array.isRequired
};