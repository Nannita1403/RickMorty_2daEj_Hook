import { useState } from 'react';
import './Personajes.css';

const Personajes = ({ name, image }) => {
  const [turned, setTurned] = useState(false);
  
  return (
    <>
      <h2>{name}</h2>
      <img
        className={turned ? 'rotated' : ''}
        src={image}
        alt={name}
        onClick={() => setTurned(turned => !turned)}
      />
    </>
  );
};

export default Personajes;