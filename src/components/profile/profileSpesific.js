import React from 'react';
import ProfileSpesificTop from './profileSpesificTop';
import ProfileSpesificBottom from './profileSpesificBottom';

const ProfileSpesific = (props) => {
    const profile = props.profile
    console.log(props);
    if(profile){
        return(
            <div>
                <ProfileSpesificTop profile={profile}/>
                {props.children}
                <ProfileSpesificBottom profile={profile}/>
            </div>
        );
    }else return null;  
}

export default ProfileSpesific;