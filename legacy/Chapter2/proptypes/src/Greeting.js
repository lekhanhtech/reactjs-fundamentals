import React from 'react'
import PropTypes from 'prop-types';

export default class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

// Specifies the default values for props:
// Greeting.defaultProps = {
//     name: 'Stranger'
// };
