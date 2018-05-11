import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  render() {
    const { SettingsReducers } = this.props;

    return (
      <nav
        className={classnames(
          `navbar`,
          `navbar-expand-lg`,
          SettingsReducers.interface === 'dark' && `navbar-dark`
        )}
      >
        <a className="navbar-brand" href="#">
          Dockle
        </a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/chat">
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Navbar);
