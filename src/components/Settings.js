import React from 'react';
import classnames from 'classnames';
import serialize from 'form-serialize';
import { connect } from 'react-redux';
import { save } from './../actions/settings';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
  }

  send(e) {
    const { dispatch } = this.props;
    const form = document.querySelector('form');
    const formData = serialize(form, { hash: true });

    dispatch(save(formData));
  }

  render() {
    const { SettingsReducers } = this.props;
    console.log(SettingsReducers);
    return (
      <div id="Settings">
        <div className="wrapper">
          <div className="card">
            <form>
              <div className="form-group">
                <label>Username:</label>
                <input className="form-control" name="username" type="text" />
              </div>
              <div className="form-group">
                <label>Interface color:</label>
                <div className="group-radio">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="interface"
                      type="radio"
                      value="light"
                    />
                    <label className="form-check-label">Light</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="interface"
                      type="radio"
                      value="dark"
                    />
                    <label className="form-check-label">Dark</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Clock display:</label>
                <div className="group-radio">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="clock"
                      type="radio"
                      value="12"
                    />
                    <label className="form-check-label">12 hours</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="clock"
                      type="radio"
                      value="24"
                    />
                    <label className="form-check-label">24 hours</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Message sound:</label>
                <div className="group-radio">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="sound"
                      type="radio"
                      value="on"
                    />
                    <label className="form-check-label">On</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="sound"
                      type="radio"
                      value="off"
                    />
                    <label className="form-check-label">Off</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Send message with ctrl + enter:</label>
                <div className="group-radio">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="ctrl"
                      type="radio"
                      value="on"
                    />
                    <label className="form-check-label">On</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="ctrl"
                      type="radio"
                      value="off"
                    />
                    <label className="form-check-label">Off</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Language:</label>
                <select className="form-control" name="lang">
                  <option value="en">English</option>
                  <option value="pt-br">Portuguese (pt-BR)</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="btn-wrapper">
          <button
            className={classnames(
              `btn`,
              SettingsReducers.interface === 'dark' && `btn-dark`,
              SettingsReducers.interface === 'light' && `btn-primary`,
              `btn-block`
            )}
            onClick={this.send}
          >
            save changes
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Settings);
