
import React from 'react'
import cat from './cat.png'

export default class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
}