import React, { PropTypes } from 'react';

import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import Footer from './Footer';
import NavigationMenu from './NavigationMenu';

export class App extends React.Component {

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
