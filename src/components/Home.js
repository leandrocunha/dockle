import React from 'react';
import serialize from 'form-serialize';
import { connect } from 'react-redux';
import { save } from './../actions/settings';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const form = document.querySelector('form');
    const formData = serialize(form, { hash: true });

    dispatch(save(formData));
    history.push('/chat');
  }

  render() {
    return (
      <div id="Home">
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>What is your username?</label>
            <input
              required
              className="form-control"
              name="username"
              type="text"
            />
          </div>
          <button className="btn btn-secondary btn-block">enter</button>
        </form>
      </div>
    );
  }
}

export default connect()(Home);
