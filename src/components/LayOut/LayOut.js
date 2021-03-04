import AppBar from "../AppBar/AppBar";
import React, { Component } from "react";

class Layout extends Component {
  render() {
  
    
    return (
      <>
          <AppBar/> {this.props.children}
      </>
    );
  }
}

export default Layout;
