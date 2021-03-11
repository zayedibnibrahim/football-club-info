import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../Header/Header';
import LeagueBox from '../LeagueBox/LeagueBox'

const Home = () => {
    const [footballLeague, setFootballLeague] = useState([]);

    //slice to get 6 object
    const getFirst6 = (f6) => {
        setFootballLeague(f6.slice(0, 12))
    }
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => getFirst6(data.leagues))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="leagues">
                <div className="league-container container d-grid">
                    {
                        footballLeague.map(league => <LeagueBox key={league.idLeague} allLeagues={league}></LeagueBox>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;