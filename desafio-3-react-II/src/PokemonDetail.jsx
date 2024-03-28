
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Hubo un problema al obtener los detalles del Pokémon: ', error);
      }
    };

    getPokemonDetails();
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="pokemon-detail-container">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="pokemon-stats">
        <h3>{pokemon.name}</h3>
        <p>hp: {pokemon.stats[0].base_stat}</p>
        <p>attack: {pokemon.stats[1].base_stat}</p>
        <p>defense: {pokemon.stats[2].base_stat}</p>
        <p>special-attack: {pokemon.stats[3].base_stat}</p>
        <p>special-defense: {pokemon.stats[4].base_stat}</p>
        <p>speed: {pokemon.stats[5].base_stat}</p>
        <p>{pokemon.types.map((type) => type.type.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default PokemonDetail;
