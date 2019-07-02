import React from 'react';
import './matchDetail.css';

const MatchDetail = ({level, cs, kp}) => {

    return(
        <div className='MATCH_DETAIL_CONT'>
            <div className='DETAIL_LEVEL_CONT'>
                Level {level}
            </div>
            <div className='DETAIL_CS_CONT'>
                {cs} CS
            </div>
            <div className='DETAIL_KP_CONT'>
                {kp}% KP
            </div>
        </div>
    );
}

export default MatchDetail;