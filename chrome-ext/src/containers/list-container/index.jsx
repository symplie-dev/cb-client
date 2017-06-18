import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import ListHeader from '../../components/list-header/index.jsx';
import ListViewPortal from '../list-view-portal/index.jsx';

export default class ListContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.listContainer}>
        <ListHeader
          selectedList={this.props.selectedList}
          clickHeaderItemHandler={this.props.clickHeaderItemHandler}
        />
        <ListViewPortal
          selectedList={this.props.selectedList}
          groups={this.props.groups}
        />
      </div>
    );
  }
}

ListContainer.propTypes = {
  selectedList: PropTypes.string.isRequired,
  clickHeaderItemHandler: PropTypes.func.isRequired,
  groups: PropTypes.array.isRequired
};