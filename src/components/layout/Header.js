import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import { Collapse, Button } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const headerStyle = {
      background: '#343a40',
      color: '#fff',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <div className="Header" style={headerStyle}>
        <h1 className="heading text-center p-4 mb-0">
          <Link
            to="/google-news-in"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            Junoon A News Web App
          </Link>
        </h1>
        <div className="menu mb-0 text-center">
          <Button onClick={this.toggle} style={{ marginBottom: '1rem' }}>
            Sources
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Sidebar />
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Header;
