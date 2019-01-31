import React from 'react';
import PropTypes from 'prop-types';

import { Container } from "./styles";

import { connect } from 'react-redux';

const Footer = ({ count }) => (
  <Container>
    <small>Você tem</small>
    &nbsp;{count}&nbsp;
    <small>favoritos</small>
  </Container>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  count: state.favorites.data.length
})

export default connect(mapStateToProps)(Footer);
