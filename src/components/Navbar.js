import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="#dd2c00 deep-orange accent-4" light>
        <NavbarBrand exact="true" href="/account" className="mr-auto">Account</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/cities/">Cities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/account">Account</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;