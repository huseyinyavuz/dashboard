import React from 'react';
import './profileSpesificTop.css';

const ProfileSpesificTop = ({profile}) => {

    const avatar = require('../../assets/avatars/avatar' + profile.id + '.png');

    return(
        <div className='PROFILE_SPESIFIC_TOP_CONT'>
            <img className='PROFILE_SPESIFIC_TOP_AVATAR' src={avatar} alt=''/>
            <div className='PROFILE_SPESIFIC_TOP_INFO'>
                <div className='PROFILE_SPESIFIC_NAME'>
                    {profile.name}
                </div>
                <div className='PROFILE_SPESIFIC_RANK'>
                    Rank {profile.rank}
                </div>
                <div className='PROFILE_SPESIFIC_NICK'>
                    Challenger
                </div>
                <div className='PROFILE_SPESIFIC_TOP_KDA'>
                    {profile.kda}
                </div>
                <div className='PROFILE_SPESIFIC_WINRATE'>
                    {profile.winRate}
                </div>
                <div className='PROFILE_SPESIFIC_WINLOSS'>
                    {profile.winLoss}
                </div>
                <div className='PROFILE_SPESIFIC_CS'>
                    {profile.cs}
                </div>
            </div>
        </div>
    );

}

export default ProfileSpesificTop;