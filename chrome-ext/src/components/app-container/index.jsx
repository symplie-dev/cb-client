import React from 'react';
import styles from './style.css';
import ListContainer from '../list-container/index.jsx';
import DetailContainer from '../detail-container/index.jsx';

export default class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedList: 'groups'
    };
    this.clickHeaderItemHandler = this.clickHeaderItemHandler.bind(this);
  }

  clickHeaderItemHandler(e) {
    // e.preventDefault();
    this.setState({
      selectedList: e.payload
    });
  }

  render() {
    return (
      <div className={styles.app}>
        <ListContainer
          selectedList={this.state.selectedList}
          clickHeaderItemHandler={this.clickHeaderItemHandler}
        />
        <DetailContainer />
      </div>
    );
  }
}