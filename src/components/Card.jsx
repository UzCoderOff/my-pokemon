import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const nav = useNavigate()

  const getData = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData(pokemon.name);
  }, [pokemon.name]);

  if (pokemonData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card" onClick={()=> nav(`/search/${pokemon.name}`)}>
      <img
        src={pokemonData.sprites.other.dream_world.front_default}
        alt={pokemonData.name}
      />
      <h1>{pokemonData.name}</h1>
      <p>{pokemonData.types.map(type => type.type.name).join(", ")}</p>
    </div>
  );
};

export default Card;
