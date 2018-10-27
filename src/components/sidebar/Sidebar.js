import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import SidebarNavLink from './SidebarNavLink';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <h4 className="sidebar-header">Top Journals</h4>
        <Nav vertical>
        <SidebarNavLink to = "/google-news-in">
  Top News IN India
  </SidebarNavLink>
  <SidebarNavLink to = "/techradar">Tech-Radar</SidebarNavLink>
  <SidebarNavLink to = "/the-times-of-india"> The Times of India </SidebarNavLink>
  <SidebarNavLink to = "/techcrunch"> TechCrunch </SidebarNavLink>
  <SidebarNavLink to = "/the-hindu"> The Hindu </SidebarNavLink>
  <SidebarNavLink to = "/espn-cric-info"> ESPN </SidebarNavLink>
  <SidebarNavLink to = "/the-economist"> The Economist </SidebarNavLink>
  <SidebarNavLink to = "/national-geographic"> National </SidebarNavLink>
  <SidebarNavLink to = "/google-news-in"> Google News </SidebarNavLink>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
