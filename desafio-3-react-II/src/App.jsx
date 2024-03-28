import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Pokemones from './Pokemones';
import PokemonDetail from './PokemonDetail'; // Asegúrate de tener este componente
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:pokemonName" element={<PokemonDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

