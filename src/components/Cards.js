import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Cards.css';

const Cards = ({ pathPhoto, path, title, subtitle, nameButton }) => {
    return (
        <>
            <div className="card">
                <Link to={path}>
                    <img className="card-img-top" src={pathPhoto} alt="Card image cap" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                    <Link to={path} className="btn btn-primary">{nameButton}</Link>
                </div>


            </div>
        </>

    )
}
export default Cards