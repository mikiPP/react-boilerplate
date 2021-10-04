import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import Button from '../Button';

const POINT_FIVE = 0.5;

const Card = ({ todo, onUpdate }) => (
  <div className="card">
    <div className="card__content">
      <div style={todo.url ? { backgroundImage: `url(${todo.url})` } : null} className={`card__img ${Math.random() > POINT_FIVE ? 'img-black-withe' : ''}`} />
      <div className="card__title" >
        <span>{todo?.title}</span>
        <Button text="Editar" className="card__button" onClick={() => onUpdate(todo)} />
      </div>
    </div>
  </div>
);

Card.defaultProps = {
  onUpdate: () => true,
};

Card.propTypes = {
  todo: PropTypes.object.isRequired,
  onUpdate: PropTypes.func,
};

export default Card;
