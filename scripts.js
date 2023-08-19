let pokemonRepository = (function () {

    let pokemonList = [

       { name: "Bulbasaur", height: 7, types: ['grass', 'poison'] },
    
       { name:"Charizard", height: "1.7", types:['fire', 'flying'] },
     
       {name:"Squirtle", height: "1", types:["water"] },
    ]

 
function getAll () {
    return pokemonList;
}

function add (pokemon) {
    pokemonList.push(pokemon);
}

return {
    getAll: getAll,
    add:add
}
})()

pokemonRepository.add({name: 'Pikachu', height: 4, types: ["rock, stone"]});
pokemonRepository.getAll().forEach(function (pokemon){
    let pokemonDetails = pokemon.name +  " (height: " + pokemon.height + ")<br>"
    if (pokemon.height > 5) {
        pokemonDetails += " Wow. That's big! <br><br>";
    }
    document.write(pokemonDetails)
});


 
      



