import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from './App.styl';
const cx = classnames.bind(s);
import logo from './react-logo.png';

export class NotFound extends React.Component {
  render() {
    return (
      <div className={cx('page')}>
        <h4>Not found</h4>
      </div>
    );
  }
}

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export class App extends React.Component {
  static propTypes = {
    children: T.node,
  };

  render() {
    return (
      <div className={cx('App')}>
        {this.props.children}
      </div>
    );
  }
}
