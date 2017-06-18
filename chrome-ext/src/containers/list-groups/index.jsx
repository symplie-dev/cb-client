import React from 'react';
import PropTypes from 'prop-types'
import styles from './style.css';
import Group from '../../components/group/index.jsx'

export default class ListGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.listGroups}>
        Group List
        <ul>
          {
            this.props.groups.map((group, index) => {
              return (
                <li key={ index }>
                  <Group
                    name={group.name}
                  />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

ListGroups.propTypes = {
  groups: PropTypes.array.isRequired
};