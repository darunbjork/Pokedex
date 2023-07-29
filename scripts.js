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

document.write(pokemonList)


for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 8 && pokemonList[i].height > 2 ) {
    console.log(pokemonList[i].name + " Wow that's big!");
    }else if (pokemonList[i].height > 1){
        console.log(pokemonList[i].name + " not big");
    }else {
        console.log(pokemonList[i].name + " not wow");
    }
    }






