
function CharacterCard (obj: {name: string, id : number}) {

    return(
        <div>
            <li key={obj.id}>{obj.name}</li>
        </div>
    )
}

export default CharacterCard;