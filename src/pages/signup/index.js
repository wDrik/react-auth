import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SignUpActions } from '../../store/ducks/signup';

import { Form, Container } from "./styles";

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
    signUpFailure: PropTypes.func.isRequired,
    signup: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
      })),
      error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }).isRequired,
  }

  state = {
    name: '',
    email: '',
    password: ''
  };

  handleSignUp = async e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    if (!name || !email || !password) {
      this.props.signUpFailure('Preencha todos os dados para se cadastrar!');
    }

    const { history } = this.props;

    await this.props.signUpRequest({ name, email, password }, history);
  }

  render() {
    return(
      <Container>
        <Form onSubmit={this.handleSignUp}>
          {!!this.props.signup.error && <p>{this.props.signup.error}</p>}

          <input
            type="text"
            placeholder="Nome"
            onChange={e => this.setState({ name: e.target.value })}
          />

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

          <button type="submit">Cadastrar grátis</button>

          {this.props.signup.loading && <span>Carregando...</span>}

          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  signup: state.signup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignUpActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
