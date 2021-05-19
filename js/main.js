const picture = document.getElementById('picture');
const img = document.createElement('img');

async function getPokemon (){
    const idPokemon =  document.getElementById('idPokemon').value;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
    const json = await data.json();
    if (data.status == 200) {
        const url = await json.sprites.front_default;
        document.getElementById('name').innerText = idPokemon;
        img.setAttribute('src', url);
        img.setAttribute('width', '60%');
        document.getElementById('picture').appendChild(img);
        }  

    }  

// AGREGAR ELEMENTO HTML CON JS
// 1-Crear elemento con createElement
// 2-Darle al atributo src la url de la img 
// 3-Agregar al body el elemento creado aplicando appenChild


// NOTAS
// Es necesario definir una funcion para utilizar async y await;
// Recordar transformar la respuesta del fetch en json utilizando el método .json();