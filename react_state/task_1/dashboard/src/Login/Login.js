import React from "react";
import PropTypes from "prop-types";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ isLoggedIn: true });
    this.props.logIn(email, password);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value }, this.updateSubmitButton);
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value }, this.updateSubmitButton);
  }

  updateSubmitButton = () => {
    const { email, password } = this.state;
    this.setState({
      enableSubmit: email !== "" && password !== "",
    });
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <form onSubmit={this.handleLoginSubmit}>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
          />
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

export default Login;
