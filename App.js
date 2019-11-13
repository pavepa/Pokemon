import React from 'react';
import "./Style.css";
import Pic1 from "./pic1.jpg";

function App() {

  const pokemons = require('./card-data.json');

  return (
    <div>

      <div className = "bgImage">
        <img src = {Pic1} alt = "image" />
      </div>

      <div className = "list">

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[0].image} />
          </div>
          <h1>{pokemons.pokemon[0].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[0].moves[0]}</p>
              <p>{pokemons.pokemon[0].moves[1]}</p>
              <p>{pokemons.pokemon[0].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[0].stats.speed}</p>
              <p>{pokemons.pokemon[0].stats.attack}</p>
              <p>{pokemons.pokemon[0].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[1].image} />
          </div>
          <h1>{pokemons.pokemon[1].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[1].moves[0]}</p>
              <p>{pokemons.pokemon[1].moves[1]}</p>
              <p>{pokemons.pokemon[1].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[1].stats.speed}</p>
              <p>{pokemons.pokemon[1].stats.attack}</p>
              <p>{pokemons.pokemon[1].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[2].image} />
          </div>
          <h1>{pokemons.pokemon[2].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[2].moves[0]}</p>
              <p>{pokemons.pokemon[2].moves[1]}</p>
              <p>{pokemons.pokemon[2].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[2].stats.speed}</p>
              <p>{pokemons.pokemon[2].stats.attack}</p>
              <p>{pokemons.pokemon[2].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[3].image} />
          </div>
          <h1>{pokemons.pokemon[3].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[3].moves[0]}</p>
              <p>{pokemons.pokemon[3].moves[1]}</p>
              <p>{pokemons.pokemon[3].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[3].stats.speed}</p>
              <p>{pokemons.pokemon[3].stats.attack}</p>
              <p>{pokemons.pokemon[3].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[4].image} />
          </div>
          <h1>{pokemons.pokemon[4].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[4].moves[0]}</p>
              <p>{pokemons.pokemon[4].moves[1]}</p>
              <p>{pokemons.pokemon[4].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[4].stats.speed}</p>
              <p>{pokemons.pokemon[4].stats.attack}</p>
              <p>{pokemons.pokemon[4].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[5].image} />
          </div>
          <h1>{pokemons.pokemon[5].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[5].moves[0]}</p>
              <p>{pokemons.pokemon[5].moves[1]}</p>
              <p>{pokemons.pokemon[5].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[5].stats.speed}</p>
              <p>{pokemons.pokemon[5].stats.attack}</p>
              <p>{pokemons.pokemon[5].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[6].image} />
          </div>
          <h1>{pokemons.pokemon[6].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[6].moves[0]}</p>
              <p>{pokemons.pokemon[6].moves[1]}</p>
              <p>{pokemons.pokemon[6].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[6].stats.speed}</p>
              <p>{pokemons.pokemon[6].stats.attack}</p>
              <p>{pokemons.pokemon[6].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[7].image} />
          </div>
          <h1>{pokemons.pokemon[7].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[7].moves[0]}</p>
              <p>{pokemons.pokemon[7].moves[1]}</p>
              <p>{pokemons.pokemon[7].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[7].stats.speed}</p>
              <p>{pokemons.pokemon[7].stats.attack}</p>
              <p>{pokemons.pokemon[7].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[8].image} />
          </div>
          <h1>{pokemons.pokemon[8].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[8].moves[0]}</p>
              <p>{pokemons.pokemon[8].moves[1]}</p>
              <p>{pokemons.pokemon[8].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[8].stats.speed}</p>
              <p>{pokemons.pokemon[8].stats.attack}</p>
              <p>{pokemons.pokemon[8].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[9].image} />
          </div>
          <h1>{pokemons.pokemon[9].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[9].moves[0]}</p>
              <p>{pokemons.pokemon[9].moves[1]}</p>
              <p>{pokemons.pokemon[9].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[9].stats.speed}</p>
              <p>{pokemons.pokemon[9].stats.attack}</p>
              <p>{pokemons.pokemon[9].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[10].image} />
          </div>
          <h1>{pokemons.pokemon[10].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[10].moves[0]}</p>
              <p>{pokemons.pokemon[10].moves[1]}</p>
              <p>{pokemons.pokemon[10].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[10].stats.speed}</p>
              <p>{pokemons.pokemon[10].stats.attack}</p>
              <p>{pokemons.pokemon[10].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[11].image} />
          </div>
          <h1>{pokemons.pokemon[11].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[11].moves[0]}</p>
              <p>{pokemons.pokemon[11].moves[1]}</p>
              <p>{pokemons.pokemon[11].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[11].stats.speed}</p>
              <p>{pokemons.pokemon[11].stats.attack}</p>
              <p>{pokemons.pokemon[11].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[12].image} />
          </div>
          <h1>{pokemons.pokemon[12].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[12].moves[0]}</p>
              <p>{pokemons.pokemon[12].moves[1]}</p>
              <p>{pokemons.pokemon[12].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[12].stats.speed}</p>
              <p>{pokemons.pokemon[12].stats.attack}</p>
              <p>{pokemons.pokemon[12].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[13].image} />
          </div>
          <h1>{pokemons.pokemon[13].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[13].moves[0]}</p>
              <p>{pokemons.pokemon[13].moves[1]}</p>
              <p>{pokemons.pokemon[13].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[13].stats.speed}</p>
              <p>{pokemons.pokemon[13].stats.attack}</p>
              <p>{pokemons.pokemon[13].stats.defense}</p>
            </div>
          </div>
        </div>

        <div>
          <div className = "effect">
            <img src = {pokemons.pokemon[14].image} />
          </div>
          <h1>{pokemons.pokemon[14].name}</h1>
          <div className = "column">
            <div className = "left">
              <p>{pokemons.pokemon[14].moves[0]}</p>
              <p>{pokemons.pokemon[14].moves[1]}</p>
              <p>{pokemons.pokemon[14].moves[2]}</p>
            </div>
            <div className = "right">
              <p>{pokemons.pokemon[14].stats.speed}</p>
              <p>{pokemons.pokemon[14].stats.attack}</p>
              <p>{pokemons.pokemon[14].stats.defense}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;