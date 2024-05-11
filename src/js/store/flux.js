import peopleDispatcher from "./peopleDispatcher";
import personDispatcher from "./personDispatcher";
import planetDispatcher from "./planetsDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []


		},
		actions: {

			addPeople: async () => {
				const { results } = await peopleDispatcher.get();
				// console.log(results)
				const store = getStore();
				setStore({ ...store, people: results.map(person => person.name) });
				// console.log( store);
				},

			addPerson: async (id) => {
				const  data  = await personDispatcher.get(`${id}`);
				return data;
			},

			addPlanets: async (id) => {
				const data = await planetDispatcher.get(`${id}`);
				// console.log(data)
				return data;
				
				},
			

			// addPlanets: async () => {
				// const store = getStore();
				// setStore({...store,planets: data.map(planet => planet.name )})
				// console.log(store);
			// 	const {properties} = await planetDispatcher.get(id);
			// 	console.log(properties)
			// }

			


		}
	};
};

export default getState
