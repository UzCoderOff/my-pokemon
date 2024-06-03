import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import './Pokemon.css'; 

const Pokemon = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}/`
        );
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [name]);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="pokemon-container">
        <Link to="/" className="home-button">Home</Link>
        {data !== null && (
          <>
            <h1 className="pokemon-name">{data.name}</h1>
            <div className="pokemon">
              <div className="img">
                <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
              </div>
              <div className="info">
                <p className="types">
                  {data.types.map((type) => (
                    <span key={type.type.name} className="type">{type.type.name}</span>
                  ))}
                </p>
                <div className="measurements">
                  <h3>Height: {data.height}</h3>
                  <h3>Weight: {data.weight}</h3>
                </div>
                <div className="abilities">
                  <h3>Abilities:</h3>
                  {data.abilities.map((ability) => (
                    <p key={ability.ability.name}>{ability.ability.name}</p>
                  ))}
                </div>
              </div>
              <div className="stats">
                <h3>Stats:</h3>
                {data.stats.map((stat) => (
                  <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                ))}
              </div>
              <div className="moves">
                <h3>Moves:</h3>
                {data.moves.map((move) => (
                  <p key={move.move.name}>{move.move.name}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
