
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


/*document.write(pokemonList)

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 8 && pokemonList[i].height > 2 ) {
    console.log(pokemonList[i].name + " Wow that's big!");
    document.write(pokemonList[i].name + " Wow that's big!" + '<br>')
    }else if (pokemonList[i].height > 1){
        console.log(pokemonList[i].name + " not big");
        document.write(pokemonList[i].name + " not big!" + '<br>');
    }else {
        console.log(pokemonList[i].name + " not wow");
        document.write(pokemonList[i].name + " not wow!");
    }
    }*/

//Dom manipulation and creating button element and displaying with a new way
function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class')
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    // Added an event listener to the button element that i created 
    button.addEventListener('click', function (event){
        showDetails(pokemon);
    });
}

//Here i call the eventListner to display on Dom
function showDetails(pokemon){
    console.log(pokemon);
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
