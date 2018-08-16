import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        return (
           <React.Fragment>
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar {this.props.totalCount}</a>
      </nav>
      </React.Fragment>
      );
    }
}
 
export default Navbar;