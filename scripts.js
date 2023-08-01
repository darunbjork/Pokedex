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
 }
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 8 && pokemonList[i].height > 2 ) {
    document.write(pokemonList[i].name + " Wow that's big!" + '<br>')
    }else if (pokemonList[i].height > 1){
        document.write(pokemonList[i].name + " not big!" + '<br>');
    }else {
        document.write(pokemonList[i].name + " not wow!");
    }
    }






