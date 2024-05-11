import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from './../store/appContext';
import { CardCharacter } from "./cardCharacter";
import { CardPlanet } from "./CardPlanet";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const [characters, setCharacters] = useState([])
	const [planetsList,setPlanetsList] = useState([])

		useEffect( async () => {
			// actions.addPlanets(5);
			const characters = [];
			for (let i = 1; i <= 9; i++) {
				characters.push( await actions.addPerson(i))
			}
			setCharacters(characters);
		},[])

		useEffect( async () => {
			// console.log(actions.addPlanets());
			const planetsList = [];
			for (let i = 1; i <= 9; i++) {
				planetsList.push( await actions.addPlanets(i))
				// console.log(planetsList);
			}
			setPlanetsList(planetsList);
		},[])
	return (
<div className="text-center mt-5">
	<h1>CHARACTERS</h1>
		<div className="card-container">
{characters.map((character) => (<CardCharacter name={character.name} hair_color={character.hair_color} height={character.height}/>))}
		</div>
		<h1>PLANETS</h1>
		<div className="card-container">
{planetsList.map((planet) => (<CardCharacter name={planet.name} hair_color={planet.climate} height={planet.terrain}/>))}
		</div>
	</div>
	)
	
};
