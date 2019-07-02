import React from 'react';
import './matchResult.css';
import moment from 'moment';

const VICTORY = 'VICTORY';
const DEFEAT = 'DEFEAT';
const RANK_SOLO = 'Ranked Solo'
const FLEX = 'Flex';

const GREEN = '#4d8e3e';
const RED = '#c13326';

const MatchResult = ({victory, solo, duration, time}) => {
    
    const result = victory ? VICTORY : DEFEAT;
    const status = solo ? RANK_SOLO : FLEX;
    const color = victory ? GREEN : RED;

    const colorStyle = {
        color: color
    }

    function hoursAgo(time) {
        const finished = moment(time).startOf('hours');
        const today = moment(new Date()).startOf('hours');
        const duration = moment.duration(today.diff(finished));  
        return duration.asHours();
    }

    return(
        <div className='MATCH_RESULT_CONT'>
            <div style={colorStyle} className='RESULT_CONT'>
                {result}
            </div>
            <div>
                <div className='MATCH_STATUS_CONT'>
                    {status}
                </div>
                <div className='MATCH_DURATION_CONT'>
                    {duration}
                </div>
                <div className='MATCH_TIME_CONT'>
                    {hoursAgo(time)} Hours Ago
                </div>
            </div>
        </div>
    );
}

export default MatchResult;