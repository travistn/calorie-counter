import React from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap'

const styles = {
  navBar: {
    color: 'white'
  }
}

export default function NavBar() {
  return (
    <div>
      <Navbar color="secondary" light expand="md" className="fixed-bottom">
        <NavbarBrand href="#home" style={styles.navBar}>
          <i className="fas fa-cookie-bite mr-2"></i>
        CalPal</NavbarBrand>
        <Nav className="ml-2" navbar>
          <NavItem>
            <NavLink href="#home" style={styles.navBar}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#history" style={styles.navBar}>History</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}
