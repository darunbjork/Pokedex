let pokemonRepository=function(){

  let t=[];function e(e) {
  "object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):
  console.log("pokemon is not correct")}
  function n(){return t}
  function i(t){o(t)}
  function o(t){return fetch(t.detailsUrl).then(function(t){
    return t.json()}).then(
      function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.weight=e.weight,t.types=e.types,2===e.types.length?
        (t.types[0]=e.types[0].type.name,t.types[1]=e.types[1].type.name):t.types[0]=e.types[0].type.name,a(t)}).catch(
          function(t){console.error(t)})}
          function a(t){let e=$(".modal-body"),n=$(".modal-title");$(".modal-header"),n.empty(),e.empty();
          let i=$("<h1>"+t.name+"</h1>"),o=$('<img class= "modal-img" style= "width:50%">');o.attr("src",t.imageUrl);
          let a=$("<p>height: "+t.height+"mm</p>"),p=$("<p>weight: "+t.weight+"lbs</p>"),l=$("<p>types: "+t.types+"</p>");
          n.append(i),e.append(o),e.append(a),e.append(p),e.append(l)}return{getAll:n,add:e,addListItem:
            function t(e){let n=document.querySelector(".list-group"),
            i=document.createElement("li");i.classList.add("list-group-item","list-pokemon");
            let a=document.createElement("button");a.innerText=e.name,a.classList.add("btn","btn-primary","w-100"),
            a.setAttribute("data-target","#modal-container"),a.setAttribute("data-toggle","modal"),
            i.appendChild(a),n.appendChild(i),a.addEventListener("click",()=>{var t;t=e,o(t)})},showModal:a,loadList:
            function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then
            (function(t){t.results.forEach(
              function(t){e({name:t.name,height:t.height,weight:t.weight,types:t.types,detailsUrl:t.url})})}).catch(function(t){
                console.error(t)})},loadDetails:o,showDetails:i}}();
                pokemonRepository.loadList().then(
                  function(){pokemonRepository.getAll().forEach(
                    function(t){pokemonRepository.addListItem(t)})});