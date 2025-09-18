import React from 'react';
import PropTypes from 'prop-types';

function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard">
      <h2 className="pokecard-name">{name}</h2>
      <img src={imgSrc} alt={name} className="pokecard-image" />
      <p className="pokecard-type">Type: {type}</p>
      <p className="pokecard-exp">Base Experience: {base_experience}</p>
    </div>
  );
}

Pokecard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  base_experience: PropTypes.number.isRequired,
};

export default Pokecard;
