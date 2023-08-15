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

pokemonRepository.add( {name: "Blastoise", height: "5.03", types: ["water"] });
pokemonRepository.getAll().forEach(function(pokemon){
    document.write('﹩[pokemon.name] height:﹩[pokemon.height] types:﹩[pokemon.types[0]] <br><br></br>');   
});

 

    


 
      



