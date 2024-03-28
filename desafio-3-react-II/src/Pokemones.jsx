
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pokemones.css';

const Pokemones = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error('Hubo un problema al obtener los pokémon: ', error);
      }
    };

    getPokemons();
  }, []);

  const handleSelectPokemon = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleViewDetails = () => {
    if(selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };

  return (
    <div className="pokemones-container">
      <div className="selector-container">
        <h2>Selecciona un pokémon</h2>
        <select value={selectedPokemon} onChange={handleSelectPokemon}>
          <option value="">Pokemones</option>
          {pokemons.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button onClick={handleViewDetails}>Ver Detalle</button>
      </div>
    </div>
  );
};

export default Pokemones;
