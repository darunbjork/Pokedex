// using IIFE (Immediately Invoked Function Expression) to prevent mixing variables and causing stop working 
let pokemonRepository = (function() {

    let pokemonList = [

        {
        name: "Bulbasaur", 
        height: 7, 
        types: ['grass', 'poison']
     },
    
     {
        name:"Charizard",
        height: "1.7",
        types:['fire', 'flying']
     },
     {
        name:"Squirtle",
        height: "1",
        types:["water"]
     },
    ];
// Added objects to our Pokemonlist variable  
    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    } // added items to the pokemon

    return {
        getAll : getAll,
        add : add
    }

})();

document.write(pokemonRepository.getAll());
pokemonRepository.add({ name: "pikachu", height: 0.3, types:["electric"] });

document.write(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
let pokemonList = document.querySelector(".pokemon-list");
let listItem = document.createElement =("li");
let button = document.createElement = ("button");
button.innerText = "placeholder";
button.classList.add("button-class");
listItem.appendChild(button);
pokemonList.appendChild(listItem);
});  



 

    


 
      



