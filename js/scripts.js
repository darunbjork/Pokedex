let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  //This adding show and hide modal was chaleening for me i asked my tutor to help me
function showModal(pokemon) {
  let modalContainer = document.querySelector('#modal-container')

  //creating modal content
  modalContainer.innerText='';
  let modal = document.createElement('div')
  modal.classList.add('modal');

  //Add new modal content
  let closeButtonElement = document.createElement('button');
 closeButtonElement.classList.add('modal-close');
 closeButtonElement.innerText = 'X';
 closeButtonElement.addEventListener('click', hideModal);

 let titleElement = document.createElement('h1');
 titleElement.innerText = pokemon.name;

 let imageElement = document.createElement('img');
 imageElement.classList.add('modal-img');
 imageElement.src = pokemon.imageUrl

 let contentElement = document.createElement('p');
 contentElement.innerText = 'HEIGHT: ' + pokemon.height;

 let typesElement = document.createElement('p');
 typesElement.innerText = 'TYPES: ' + pokemon.types;
 
 modal.appendChild(closeButtonElement);
 modal.appendChild(imageElement);
 modal.appendChild(titleElement);
 modal.appendChild(contentElement);
 /*  modal.appendChild(typesElement); */
modalContainer.appendChild(modal);

modalContainer.classList.add('is-visible');

modalContainer.addEventListener('click', (e) => {
//since this is also triggered when clicking INSIDE the modal 
// we only want to close if the user clicks directly on the overlay

let target = e.target;
if(target === modalContainer) {
  hideModal
}
});
}

let dialogPromiseReject;

function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');

  if(dialogPromiseReject) {
    dialogPromiseReject();
    dialogPromiseReject = null;
  }

}

//editing function showmodal to display with hide and close
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
    showModal(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});