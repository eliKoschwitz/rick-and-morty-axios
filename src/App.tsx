import React, {useEffect, useState} from 'react';

import './App.css';
import axios from "axios";
import CharacterGallery from "./CharacterGallery";

export type MinifiedChar ={
  name:string;
  id:number;
};

function App() {
  const[characters, setCharacters] = useState<MinifiedChar[]>([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
        .then(antwort => antwort.data)
        .then((data) => {return setCharacters(data.results)})
        .catch(myError => {return console.error(myError)})
      }, [])

  return (
    <div>
      <CharacterGallery charList = {characters} />
    </div>
  );
}

export default App;