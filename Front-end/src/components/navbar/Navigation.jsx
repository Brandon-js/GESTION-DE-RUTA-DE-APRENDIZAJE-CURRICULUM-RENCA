import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link link-info fuente-p" href="/#about">
                    Nosotros
                </a>
            </li>

            <li class="nav-item">
                <Link
                    className="nav-link link-info fuente-p"
                    to="/preguntas-frecuentes"
                >
                    Preguntas Frecuentes
                </Link>
            </li>
            <li class="nav-item dropdown">
                <a
                    class="nav-link link-info dropdown-toggle fuente-p"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Explorar Cursos
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default Navigation;
