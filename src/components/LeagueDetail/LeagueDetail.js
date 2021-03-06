import React, { useEffect, useState } from 'react';
import './LeagueDetails.css';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFutbol, faFlag, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import male from '../../images/male.png'
import female from '../../images/female.png'
import facebook from "../../images/Facebook.png"
import twitter from "../../images/Twitter.png"
import youtube from "../../images/YouTube.png"


const LeagueDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({})
    console.log(details)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))
    }, [id])
    const { strBadge, strLeague, strGender, intFormedYear, strCountry, strDescriptionEN, strTwitter, strFacebook, strYoutube } = details;
    //conditional image render
    let genderImage;
    if (strGender === "Male") {
        genderImage = <img src={male} alt="" className="teamImg" />;
    }
    else if (strGender === "Female") {
        genderImage = <img src={female} alt="" />;
    }
    //conditional Color render
    let setColor;
    if (strGender === "Female") {
        setColor = { backgroundColor: "#e84118" };
    }
    else if (strGender === "Male") {
        setColor = { backgroundColor: "#273c75" };
    }
    return (
        <div className="leagueDetails-container">
            <div className="banner d-flex justify-content-center align-items-center">
                <img src={strBadge} alt="" className="logo" />
            </div>
            <div className="hero-holder">
                <div style={setColor} className="more-details container">
                    <div className="row d-flex align-items-center">
                        <div className="hero col-md-8">
                            <h3>{strLeague}</h3>
                            <p><FontAwesomeIcon icon={faClock} /> Founded : {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type : Football</p>
                            <p><FontAwesomeIcon icon={faVenusMars} /> Gender : {strGender}</p>
                        </div>
                        <div className="col-md-4 team-img">
                            {
                                genderImage
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="contents container">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="container social-link d-flex justify-content-center">
                <a href={`https://${strTwitter}`}><img src={twitter} alt="" /></a>
                <a href={`https://${strFacebook}`}><img src={facebook} alt="" /></a>
                <a href={`https://${strYoutube}`}><img src={youtube} alt="" /></a>
            </div>
        </div>
    );
};

export default LeagueDetail;