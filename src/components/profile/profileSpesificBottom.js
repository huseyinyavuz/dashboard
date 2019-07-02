import React from 'react';
import './profileSpesificBottom.css';
import Kda from '../matchHistory/matchKda';

const ProfileSpesificBottom = ({profile}) => {

    return(
        <div className='PROFILE_SPESIFIC_BOTTOM_CONT'>
            <div className='PROFILE_SPESIFIC_PLAYEDGAMES'>
                {profile.playedGames}
            </div>
            <Kda k={profile.k} d={profile.d} a={profile.a} kda={profile.kda}/>
            <div className='PROFILE_SPESIFIC_SUCCESSRATE'>
                {profile.successRate}
            </div>
        </div>
    );

}

export default ProfileSpesificBottom;