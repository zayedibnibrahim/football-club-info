import React from 'react';
import './LeagueBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
const LeagueBox = (props) => {
    const { strLeague } = props.allLeagues;
    return (
        <div className="league card d-flex justify-content-center align-items-center">
            <h4>{strLeague}</h4>
            <p>Sports Type: Football</p>
            <button className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowCircleRight} /></button>
        </div>
    );
};

export default LeagueBox;