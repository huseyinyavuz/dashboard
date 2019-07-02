import React from 'react';
import './matchHistory.css';
import MatchResult from './matchHistory/matchResult';
import PlayerAvatar from './matchHistory/playerAvatar';
import MatchKda from './matchHistory/matchKda';
import MatchDetail from './matchHistory/matchDetail';
import MatchItems from './matchHistory/matchItems';
import MatchLinks from './matchHistory/matchLinks';

const MatchHistory = ({match}) => {

    if(match){
        return(
            <div className='MATCH_HISTORY_CONT'>
                <MatchResult victory={match.victory} solo={match.solo} duration={match.duration} time={match.createdAt}/>
                <PlayerAvatar/>
                <MatchKda k={match.k} d={match.d} a={match.a} kda={match.kda}/>
                <MatchDetail level={match.level} cs={match.cs} kp={match.kp}/>
                <MatchItems/>
                <MatchLinks/>
            </div>
        );
    }
}

export default MatchHistory