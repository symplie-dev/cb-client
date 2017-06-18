import React from 'react';
import styles from './style.css';
import ListContainer from '../list-container/index.jsx';
import DetailContainer from '../detail-container/index.jsx';
import UserSrvc from '../../services/user.js';

const API_ENDPOINT = 'http://localhost:3000';
const user = new UserSrvc();

export default class AppContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedList: 'groups',
      friends: [],
      groups: [
        { name: 'ok' },
        { name: 'test' },
        { name: 'wat' }
      ]
    };

    this.clickHeaderItemHandler = this.clickHeaderItemHandler.bind(this);
  }

  clickHeaderItemHandler(e) {
    var self = this;

    return function () {
      self.setState({
        selectedList: e.payload
      });
    }
  }

  componentDidMount() {
    var self = this;

    // user.login().then(() => {
    //   return user.getUser();
    // }).then(() => {
    //   return user.getGroups();
    // }).then((res) => {
    //   console.log('GOT GROUPS!');
    //   console.log(res);
    //   self.setState({
    //     groups: res
    //   });
    // });
  }

  render() {
    return (
      <div className={styles.app}>
        <ListContainer
          selectedList={this.state.selectedList}
          clickHeaderItemHandler={this.clickHeaderItemHandler}
          groups={this.state.groups}
        />
        <DetailContainer />
      </div>
    );
  }
}