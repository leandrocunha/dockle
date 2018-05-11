import React from 'react';
import classsnames from 'classnames';
import { connect } from 'react-redux';
import Datetime from './Datetime';
import InputWrapper from './InputWrapper';
import Navbar from './Navbar';

import 'bootstrap';
import './../sass/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chat: [] };
  }
  componentDidMount() {
    socket.on('chat message', msg => {
      this.getChat();
      this.scroll();
    });
    this.getChat();
  }

  componentWillUpdate() {
    setTimeout(() => this.scroll(), 500);
  }

  getChat() {
    const chat = localStorage.getItem('chat');
    this.setState({ chat: JSON.parse(chat) });
  }

  scroll() {
    const el = document.getElementById('Messages');
    el.scrollTop = el.scrollHeight;
  }

  render() {
    const { chat } = this.state;
    const { SettingsReducers } = this.props;

    return (
      <div id="Chat">
        <div id="Messages" className="messages">
          {chat &&
            chat.map(({ datetime, message, username }, index) => (
              <div
                className={classsnames(
                  'message',
                  username === SettingsReducers.username && `me`
                )}
                key={index}
              >
                <h2 className="username">{username}</h2>
                <p>{message}</p>
                <p className="datetime">
                  <Datetime value={datetime} />
                </p>
              </div>
            ))}
        </div>
        <InputWrapper />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
