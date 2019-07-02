import React from 'react';
import './profileGeneral.css';

const ProfileGeneral = ({profile, profileHandler}) => {

    const avatar = require('../../assets/avatars/avatar' + profile.id + '.png');
    return(
        <div className='PROFILE_GENERAL_CONT' onClick={() => profileHandler(profile.id)}>
            <img className='PROFILE_GENERAL_AVATAR' src={avatar} alt=''/>
            <div className='PROFILE_GENERAL_NAME'>
                {profile.name}
            </div>
            <div className='PROFILE_GENERAL_KDA'>
                {profile.kda}:1 KDA
            </div>
            <div className='PROFILE_GENERAL_WINRATE'>
                {profile.winRate}%
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default ProfileGeneral;