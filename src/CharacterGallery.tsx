import {MinifiedChar} from "./App";
import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterGallery(obj : {names : MinifiedChar[]}){

    //const name = obj.names.map(name => name.name);

    return(
        <div>
            {obj.names.map(name => (<CharacterCard name1 = {name.name} /> ))}
        </div>
    )
}

export default CharacterGallery;