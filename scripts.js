
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

//Dom manipulation and creating button element and displaying with a new way
function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class')
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
}

return {
    getAll: getAll,
    add:add,
    addListItem: addListItem
}
})();

pokemonRepository.add({name: 'Pikachu', height: 4, types: ["rock, stone"]});
pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});

//wrapped pokemonsList arry in an IIFE
/*pokemonRepository.add({name: 'Pikachu', height: 4, types: ["rock, stone"]});
pokemonRepository.getAll().forEach(function (pokemon){
    let pokemonDetails = pokemon.name +  " (height: " + pokemon.height + ")<br>"
    if (pokemon.height > 5) {
        pokemonDetails += " Wow. That's big! <br><br>";
    }
    document.write(pokemonDetails)
});*/
