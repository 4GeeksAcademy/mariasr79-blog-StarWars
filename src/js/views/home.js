import React from "react";
import "../../styles/home.css";
import Personajes from "./personajes";
import Planetas from "./planetas";
import Naves from "./naves";

export const Home = () => {
	return (

		<div className="bg-secondary">
		<Personajes/>
		<Planetas/>
		<Naves/>
	</div>
);
};

