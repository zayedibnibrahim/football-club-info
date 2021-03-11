import React from 'react';
import './LeagueBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
const LeagueBox = (props) => {
    const { strLeague, idLeague } = props.allLeagues;

    const history = useHistory();
    const showLeague = id => {
        const url = `league/${id}`;
        history.push(url);
    }
    return (
        <div className="league card d-flex justify-content-center align-items-center">
            <h4>{strLeague}</h4>
            <p>Sports Type: Football</p>
            <button className="btn btn-primary" onClick={() => showLeague(idLeague)}>Explore <FontAwesomeIcon icon={faArrowCircleRight} /></button>
        </div>
    );
};

export default LeagueBox;