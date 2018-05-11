import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class InputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
  }

  send(e) {
    const msg = e.target.value;
    const { SettingsReducers } = this.props;
    const previousChat = localStorage.getItem('chat');
    const chat = JSON.parse(previousChat) || [];

    if (e.charCode === 13) {
      chat.push({
        message: msg,
        username: SettingsReducers.username,
        datetime: moment().format()
      });
      localStorage.setItem('chat', JSON.stringify(chat));
      socket.emit('chat message', msg);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="input-wrapper">
        <input
          className="form-control"
          onKeyPress={this.send}
          placeholder="Type your message"
          type="text"
        />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(InputWrapper);
