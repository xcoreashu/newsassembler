import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class SidebarNavLink extends Component {
  render() {
    return (
      <NavItem>
        <NavLink
          {...this.props}
          className="nav-link"
          activeClassName="active"
        />
      </NavItem>
    );
  }
}

SidebarNavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default SidebarNavLink;
