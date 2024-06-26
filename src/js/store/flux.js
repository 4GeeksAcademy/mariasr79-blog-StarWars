

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			naves: [],
			fav: [],
		},
		actions: {
			favorito: (nombreFav) => {
				const store = getStore();

				if (store.fav.includes(nombreFav)){
					setStore({fav:store.fav.filter((repetido) => repetido != nombreFav)});
				} else {
					setStore({fav:[...store.fav,nombreFav]});
				}

			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people")
                    .then((response) => response.json())
                    .then((data) => setStore({ personajes: data.results }))

					fetch("https://swapi.dev/api/planets")
                    .then((response) => response.json())
                    .then((data) => setStore({ planetas: data.results }))

					fetch("https://swapi.dev/api/starships")
                    .then((response) => response.json())
                    .then((data) => setStore({ naves: data.results }))
				
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
