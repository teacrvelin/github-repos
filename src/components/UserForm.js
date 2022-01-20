import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class UserForm extends React.Component {
  state = { userName: '' };

  handleUserChange = event => {
    const userName = event.target.value;
    this.setState({ userName });
  };

  handleUserSelected = event => {
    event.preventDefault();
    const { userName } = this.state;
    const { setUser } = this.props;
    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <form onSubmit={this.handleUserSelected}>
        <h3>GitHub username:</h3>
        <input
          type="text"
          size="lg"
          placeholder="e.g. facebook"
          onChange={this.handleUserChange}
          value={userName}
          autoFocus
        />
        <button
          variant="secondary"
          type="submit"
          size="lg"
          block
          className="mt-5"
        >
          GO!
        </button>
      </form>
    );
  }
}

UserForm.propTypes = {
  setUser: PropTypes.func,
};
