import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// import axios from 'axios';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      })),
      error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }).isRequired,
  }

  state = { repositoryInput: '' }

  handleAddRepository = e => {
    e.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: '' });
  }

  // componentWillMount = async () => {
  //   const response = await axios.get('https://runrun.it/api/v1.0/tasks', {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "App-Key": "e53792fdcdd0ca07990351031f3fabd5",
  //       "User-Token": "pmOBhhq2LNwxQGbiG287",
  //     }
  //   });

  //   console.log(response);
  // }

  render() {
    return(
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>

          {this.props.favorites.loading && <span> Carregando...</span>}
          {!!this.props.favorites.error && (
            <span style={{ color: 'red' }}> {this.props.favorites.error}</span>
          )}
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name} </strong>
                ({favorite.description}).
              </p>

              <a
                href={favorite.url}
                target="_blank"
                rel="noopener noreferrer">
                Acessar
              </a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
