import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import { Form, Container } from "./styles";

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    loginFailure: PropTypes.func.isRequired,
    login: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
      })),
      error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }).isRequired,
  }

  state = {
    email: '',
    password: '',
  };

  handleLogin = e => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      this.props.loginFailure('Preencha todos campos para fazer login!!');

      return;
    }

    const { history } = this.props;

    this.props.loginRequest({ email, password }, history);
  }

  render() {
    return(
      <Container>
        <Form onSubmit={this.handleLogin}>
          {!!this.props.login.error && <p>{this.props.login.error}</p>}

          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="current-password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
