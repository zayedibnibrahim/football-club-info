import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LeagueDetail = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({})
    console.log(details)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.leagues[0]))
    }, [id])
    const {strBadge} = details
    return (
        <div className="leagueDetails-container">
            <div className="banner">
                <img src={strBadge} alt=""/>
            </div>
        </div>
    );
};

export default LeagueDetail;