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
pokemonRepository.add({name: 'Pikachu' });
document.write(pokemonRepository.getAll());

// Using another way( forEach to iterate our objects instead of for loop) to display our objects on Dom
pokemonList.forEach(function(item){
    document.write(item.name + item.height + item.types);
});
    


 
      



