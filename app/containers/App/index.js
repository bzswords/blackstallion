/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import MobileHeader from 'components/App/MobileHeader';
import DesktopHeader from 'components/App/DesktopHeader';
import Footer from 'components/App/Footer';
import NavigationMenu from 'components/App/NavigationMenu';

export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const current = this.state.showMenu;
    this.setState({ showMenu: !current });
  }

  render() {
    return (
      <div>
        <MobileHeader toggleMenu={this.toggleMenu} menuOpen={this.state.showMenu} />
        <DesktopHeader />
        <NavigationMenu show={this.state.showMenu} />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </div>
    );
  }
}
