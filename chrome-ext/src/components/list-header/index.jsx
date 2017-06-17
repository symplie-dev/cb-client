import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class ListHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var groupsItemStyle = [styles.listHeaderItem],
        friendsItemStyle = [styles.listHeaderItem];
    
    switch(this.props.selectedList) {
      case 'groups':
        groupsItemStyle.push(styles.active);
        break;
      case 'friends':
        friendsItemStyle.push(styles.active);
        break;
    }

    return (
      <div className={styles.listHeader}>
        <div
          className={groupsItemStyle.join(' ')}
          onClick={this.props.clickHeaderItemHandler({
            type: 'LIST_HEADER_CLICK',
            payload: 'groups'
          })}
        >
          {this.props.groupsLabel}
        </div>
        <div
          className={friendsItemStyle.join(' ')}
          onClick={this.props.clickHeaderItemHandler({
            type: 'LIST_HEADER_CLICK',
            payload: 'friends'
          })}
        >
          {this.props.friendsLabel}
        </div>
      </div>
    );
  }
}

ListHeader.defaultProps = {
  groupsLabel: 'Groups',
  friendsLabel: 'Friends'
};

ListHeader.propTypes = {
  selectedList: PropTypes.string.isRequired,
  clickHeaderItemHandler: PropTypes.func.isRequired
};