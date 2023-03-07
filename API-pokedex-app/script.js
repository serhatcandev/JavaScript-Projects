const searchInput = document.querySelector("#poke-input");
const searchBtn = document.querySelector(".search-btn");
const pokeContainer = document.querySelector(".poke-container");

const colors = {
	fire: "#FDDFDF",
	grass: "#DEFDE0",
	electric: "#FCF7DE",
	water: "#DEF3FD",
	ground: "#f4e7da",
	rock: "#d5d5d4",
	fairy: "#fceaff",
	poison: "#d6b3ff",
	bug: "#f8d5a3",
	dragon: "#97b3e6",
	psychic: "#eaeda1",
	flying: "#F5F5F5",
	fighting: "#E6E0D4",
	normal: "#F5F5F5",
	ice: "#e0f5ff ",
};

const pokeCount = 151;

const initPokemon = async () => {
	const pokemonPromises = [];

	for (let i = 1; i <= pokeCount; i++) {
		pokemonPromises.push(getPokemon(i));
	}

	const pokemonData = await Promise.all(pokemonPromises);

	pokemonData.forEach((pokemon) => {
		createPokemonBox(pokemon);
	});
};

const getPokemon = async (id) => {
	let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	let res = await fetch(url);
	let data = await res.json();

	return data;
};

const createPokemonBox = (pokemon) => {
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const id = pokemon.id.toString().padStart(3, "0");
	const weight = `${pokemon.weight} kg`;
	const type = pokemon.types[0].type.name;
	const color = colors[type];

	const pokeEl = document.createElement("div");
	pokeEl.classList.add("poke-box");
	pokeEl.style.backgroundColor = `${color}`;
	pokeEl.innerHTML = `
    <img class="poke-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name}">
            <h3 class="poke-name">${name}</h3>
            <p class="poke-id">#${id}</p>
            <p class="poke-weight">${weight}</p>
            <p class="poke-type">${type}</p>
    `;

	pokeContainer.appendChild(pokeEl);
};

initPokemon();

searchInput.addEventListener("input", (e) => {
	const pokeNames = document.querySelectorAll(".poke-name");
	const search = searchInput.value.toLowerCase();

	pokeNames.forEach((pokeName) => {
		pokeName.parentElement.style.display = "block";

		if (!pokeName.innerHTML.toLowerCase().includes(search)) {
			pokeName.parentElement.style.display = "none";
		}
	});
});
