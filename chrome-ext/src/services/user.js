import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class UserSrvc {
  constructor() {
    this.userId;
    this.chromeToken;
  }

  login() {
    this.userId = 'test_id';
    this.chromeToken = 'test_token';
    return Promise.resolve();
  }

  getUser() {
    return Promise.resolve({
      username: 'bdxn',
      id: 'test_id',
      numFriends: 5,
      numGroupsCreated: 2,
      numMemberships: 6,
      numBookmarksCreated: 20,
      createdAt: '2017-06-18T15:53:36.222Z'
    });
  }

  getFriends() {
    return Promise.resolve([]);
  }

  getGroups() {
    return Promise.resolve([
      {
        id: 'group1_id',
        name: 'group1',
        numBookmarks: 0,
        createdAt: '2017-06-18T15:53:36.222Z'
      },
      {
        id: 'group2_id',
        name: 'group2',
        numBookmarks: 0,
        createdAt: '2017-06-18T15:53:36.222Z'
      }
    ]);
  }
}