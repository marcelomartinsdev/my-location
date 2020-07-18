import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="page-content">
      <Link to="/map">
        <div class="btn btn-two">
          <span>FIND MY LOCATION</span>
        </div>
      </Link>

      <div className="footer">
        <div className="gh-icon">
          <a href="https://github.com/marcelomartinsdev" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github-alt" aria-hidden="true" />
          </a>
        </div>

        <h1>Projeto feito por Marcelo Martins Dev</h1> 

        <div className="ig-icon">
          <a href="https://www.linkedin.com/in/marcelo-martins-moreira" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-linkedin" aria-hidden="true" />
          </a>
        </div>
        </div>
    </div>
  );
};

export default Home;
