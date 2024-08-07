import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const PersonajeDetalle = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    return (

        <>
            <div className="container-flex text-center general">
                <div className="row align-items-center">
                    <div className="col-6">
                        
                    </div>

                    <div className="col-4 informacionPersonaje">
                        <h2>{store.personajes[params.personaje].name}</h2>
                        <p>
                        El miedo es el camino hacia el lado oscuro, el miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento, el sufrimiento al lado oscuro. </p>
                    </div>

                    <div className="container-flex text-center">
                        <div className="row align-items-center col-10">
                            <table class="table tablaPersonaje">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Año de nacimiento</th>
                                        <th scope="col">Género</th>
                                        <th scope="col">Altura</th>
                                        <th scope="col">Color de piel</th>
                                        <th scope="col">Color de ojos</th>
                                    </tr>
                                    <tr>
                                        <td>{store.personajes[params.personaje].name}</td>
                                        <td>{store.personajes[params.personaje].birth_year}</td>
                                        <td>{store.personajes[params.personaje].gender}</td>
                                        <td>{store.personajes[params.personaje].height}</td>
                                        <td>{store.personajes[params.personaje].skin_color}</td>
                                        <td>{store.personajes[params.personaje].eye_color}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

PersonajeDetalle.propTypes = {
    match: PropTypes.object
};