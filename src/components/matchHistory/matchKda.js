import React from 'react';
import './matchKda.css';

const MatchKda = ({k, d, a, kda}) => {

    return(
        <div className='MATCH_KDA_CONT'>
            <div className='KDA_SEPERATE_CONT'>
                {k} / {d} / {a}
            </div>
            <div className='KDA_TOTAL_CONT'>
                {kda}:1 KDA
            </div>
        </div>
    );
}

export default MatchKda;