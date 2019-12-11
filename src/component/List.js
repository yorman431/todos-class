import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <h4>{this.props.valor}</h4>
    )
  }
}