import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} |{' '}
        <a
          href="https://www.sochsahara.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ccc' }}
        >
          Junoon
        </a>{' '}
        |{' '}
        <a
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ccc' }}
        >
          Powered by News API
        </a>
      </footer>
    );
  }
}

export default Footer;
