import React, { useEffect, useState } from 'react';
import './profile.css';
import useFetch from '../hooks/fetchHook';
import ProfileSpesific from './profile/profileSpesific';
import ProfileGeneralList from './profile/profileGeneralList';

const Profile = () => {

    const FETCH_URL = 'http://5cfa8babf26e8c00146d095e.mockapi.io/users';

    const [profiles, pending] = useFetch(FETCH_URL);
    const [profileNum, setProfileNum] = useState(1)


    if (!pending){
        console.log('profile number', profileNum);
        return(
            <div>
                <ProfileSpesific profile={profiles[profileNum - 1]}>
                    <ProfileGeneralList profiles={profiles} profileHandler={setProfileNum}/>
                </ProfileSpesific>
            </div>
        );
    }
    else return (<div>Loading...</div>)
}

export default Profile;