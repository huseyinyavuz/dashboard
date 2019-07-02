import React from 'react';
import './playerAvatar.js';
import './playerAvatar.css';

import avatar1 from '../../assets/avatars/avatar1.png';
import avatar2 from '../../assets/avatars/avatar2.png';
import avatar3 from '../../assets/avatars/avatar3.png';
import avatar4 from '../../assets/avatars/avatar4.png';
import avatar5 from '../../assets/avatars/avatar5.png';
import avatar6 from '../../assets/avatars/avatar6.png';

import prop1 from '../../assets/avatars/prop1.png';
import prop2 from '../../assets/avatars/prop2.png';

const avatarArray = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6];


const PlayerAvatar = () => {

    const randomAvatar = avatarArray[Math.floor(Math.random()*avatarArray.length)];

    return(
        <div className='AVATAR_CONT'>
            <img className='AVATAR_IMG_CONT' src={randomAvatar} alt=""/>
            <div className='AVATAR_PROPS_CONT'>
                <img className='AVATAR_PROP_CONT' src={prop1} alt=""/>
                <img className='AVATAR_PROP_CONT' src={prop2} alt=""/>
            </div>
        </div>
    );
}

export default PlayerAvatar;