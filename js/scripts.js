let pokemonRepository = (function () {

  let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "detailsUrl" in pokemon 
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}
function getAll() {
  return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector('.list-group');
  let listpokemon = document.createElement('li');
  listpokemon.classList.add("list-group-item", "list-pokemon");
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('btn', 'btn-primary', 'w-100');
  button.setAttribute('data-target', '#modal-container');
  button.setAttribute('data-toggle', 'modal');
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);

  button.addEventListener("click", () => {
    showDetails(pokemon);
  });
}

function showDetails(pokemon){
loadDetails(pokemon);
}


function loadList() {
return fetch(apiUrl).then(function (response){
  return response.json();
}).then(function (json) {
  json.results.forEach(function (item) {
    let pokemon = {
      name: item.name,
      height: item.height,
      weight: item.weight,
      types: item.types,
      detailsUrl: item.url 
    };
    add(pokemon);
  });
}).catch(function (e) {
  console.error(e);
});
}

function loadDetails(item) {
let url = item.detailsUrl;
return fetch(url).then(function (response) {
  return response.json();
}).then(function (details){
item.imageUrl = details.sprites.front_default;
item.height = details.height;
item.weight = details.weight;
item.types = details.types;
          if (details.types.length === 2) {
              item.types[0] = details.types[0].type.name; 
              item.types[1] = details.types[1].type.name;
          } else {
              item.types[0] = details.types[0].type.name;
          }
showModal(item);
}).catch(function (e) {
console.error(e);
});
}

//modal -->

function showModal(pokemon){

let modalBody = $('.modal-body');
let modalTitle = $('.modal-title');
let modalHeader = $('.modal-header');

modalTitle.empty();
modalBody.empty();

let nameElement = $('<h1>' + pokemon.name + '</h1>');
let imageElement= $('<img class= "modal-img" style= "width:50%">');
imageElement.attr("src", pokemon.imageUrl);

let heightElement = $("<p>" + "height: " + pokemon.height + "mm</p>");

let weightElement = $("<p>" + "weight: " + pokemon.weight + "lbs</p>");

let typesElement = $("<p>" + "types: " + pokemon.types + "</p>");

modalTitle.append(nameElement);
modalBody.append(imageElement);
modalBody.append(heightElement);
modalBody.append(weightElement);
modalBody.append(typesElement);

}

return {
getAll: getAll,
add: add,
addListItem: addListItem, 
showModal: showModal,
loadList: loadList,
loadDetails: loadDetails,
showDetails: showDetails
};
})();

pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
});

