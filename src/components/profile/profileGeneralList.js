import React from 'react';
import ProfileGeneral from './profileGeneral';

const ProfileGeneralList = ({profiles, profileHandler}) => {

    return(
        <div>
            {profiles.map(profile=>{return <ProfileGeneral profile={profile} profileHandler={profileHandler}/>})}
        </div>
    );
}

export default ProfileGeneralList;