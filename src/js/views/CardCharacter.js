import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { Context } from "../store/appContext";

import "../../styles/cardCharacter.css";

export const CardCharacter = ({name, hair_color, height}) => {
	const { store, actions } = useContext(Context);
	

	return (
		
		<Card style={{ width: '20rem' }}>
		<Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
		<Card.Body>
		  <Card.Title>{name}</Card.Title>
		  <Card.Text>
			<span>{hair_color}</span>
			<span>{height}</span>
		  </Card.Text>
		  <Button variant="primary">Go somewhere</Button>
		</Card.Body>
	  </Card>
	);
};

<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>