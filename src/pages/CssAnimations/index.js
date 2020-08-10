import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.css';

export default class CssAnimations extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClick() {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-nav-open')
  }

  render() {
    return (
      <div ref={this.wrapperRef} className="wrapper" >
        <div className="nav">
          <Icon className="nav__icon" type="menu-fold" onClick={() => this.handleClick()} />
          <div className="nav__body">
             <span>  Guoping Wu is learning React animations. </span>
             <p></p>
             <span>  This component uses tricks of css. </span>
             <p></p>
             <span>  Please pay attention to wrapper.classList.toggle('is-nav-open') </span>
             <p></p>
             <span>  and to css element of "transition: margin 3s "</span>
          </div>
        </div>
      </div>
    );
  }
}
