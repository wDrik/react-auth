import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Form, Container } from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleLogin = e => {
    e.preventDefault();

    console.log(this.state);
  }

  render() {
    return(
      <Container>
        <Form onSubmit={this.handleLogin}>
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

export default Login;
