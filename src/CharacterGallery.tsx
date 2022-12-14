import {MinifiedChar} from "./App";
import React from "react";
import CharacterCard from "./CharacterCard";
/*
function giveNames(obj:{names:MinifiedChar[]}): React.ReactNode[]{
    return obj.names.map(name => (<CharacterCard name1 = {name.name} /> ))
}

<div>
    {giveNames(obj)}
</div>
*/


function CharacterGallery(obj : {charList : MinifiedChar[]}){

    return(
        <div>
            {obj.charList.map(char => {return(<CharacterCard key={char.id} name = {char.name} id = {char.id} /> )})}
        </div>
    )
}

export default CharacterGallery;