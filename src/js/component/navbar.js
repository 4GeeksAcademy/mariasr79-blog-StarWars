import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const {store,actions} = useContext(Context);
	return (
		<div>
			<nav className="navbar navbar-light bg-light mb-3 ">
            <div>
                <div className="btn-group botonFav">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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