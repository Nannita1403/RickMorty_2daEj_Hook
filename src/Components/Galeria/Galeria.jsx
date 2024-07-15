import Personajes from '../Personajes/Personajes';
import './Galeria.css';
import React, { useEffect, useState } from 'react';

const Galeria = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const getpersonajes = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character/');
      const response = await res.json();
      setPersonajes(response.results);
    };
    getpersonajes();
  }, []);

  return (
    <ul className="Galeria">
      {personajes.map(character => {
        return (
          <li key={character.id}>
            <Personajes name={character.name} image={character.image} />
          </li>
        );
      })}
    </ul>
  );
};

export default Galeria;