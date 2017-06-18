import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class Group extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.group}>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

Group.propTypes = {
  name: PropTypes.string.isRequired
};