import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logostarwars from "../../img/star wars1.png";
import "./../../styles/navbar.css";

export const Navbar = () => {
	const {store,actions} = useContext(Context);
	return (
		<div>
			<nav className="navbar navbar-light bg-light mb-3 ">
            <Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="imagenDetalle" src={logostarwars}></img></span>
			</Link>
                
            <div>
                <div className="btn-group botonFav">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos {store.fav.length}
                    </button>
                    <ul className="dropdown-menu">
                        {store.fav.map((item, index) => (
                            <li key={index}>
                                <a className="dropdown-item">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>












		</div>
	);
};