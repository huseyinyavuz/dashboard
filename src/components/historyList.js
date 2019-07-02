import React, { useEffect, useState } from 'react';
import MatchHistory from './matchHistory';
import './historyList.css';
import useFetch from '../hooks/fetchHook';
//import { fetchHistory } from '../store/actions/historyAction'; 
import LazyLoad from 'react-lazy-load';


const SHOW_ALL = 'ALL';
const SHOW_VICTORY = 'VICTORY';
const SHOW_DEFEAT = 'DEFEAT';
const SHOW_SOLO = 'SOLO';
const SHOW_FLEX = 'FLEX';
const SHOW_DURATION_HIGH = 'DURATION_HIGH';
const SHOW_DURATION_LOW = 'DURATION_LOW';
const SHOW_KDA_HIGH = 'KDA_HIGH';
const SHOW_KDA_LOW = 'KDA_LOW';

const HistoryList = () => {

    const FETCH_URL = 'http://5cfa8babf26e8c00146d095e.mockapi.io/matchs';

    const [history, pending] = useFetch(FETCH_URL);
    const [filteredHistory, setFilteredHistory] = useState({});
    const [filter, setFilter] = useState('ALL');

    const handleFilter = event => {
        setFilter(event.target.value)
    }

    useEffect(() => {
        if(history.length > 0){

            if(filter === SHOW_KDA_HIGH) console.log('iyimi')
            if(filter === SHOW_ALL || filter === SHOW_DEFEAT || filter === SHOW_VICTORY || filter === SHOW_FLEX || filter === SHOW_SOLO){
                console.log('filtera girdi')
                const filteredHistory = history.filter(match => {
                    if(filter === SHOW_ALL) {
                        return true;
                    }
                    if(filter === SHOW_VICTORY && match.victory) {
                        return true;
                    }
                    if(filter === SHOW_DEFEAT && !match.victory) {
                        return true;
                    }
                    if(filter === SHOW_SOLO && match.solo) {
                        return true;
                    }
                    if(filter === SHOW_FLEX && !match.solo) {
                        return true;
                    }
                    return false;
                });

                setFilteredHistory(filteredHistory);
            }
            else{
                console.log('else')
                let sortedHistory;
                if(filter === (SHOW_DURATION_HIGH))
                    sortedHistory = history.slice().sort((a,b) => (a.duration > b.duration) ? 1 : -1)
                if(filter === (SHOW_DURATION_LOW))
                    sortedHistory = history.slice().sort((a,b) => (a.duration < b.duration) ? 1 : -1)
                if(filter === SHOW_KDA_HIGH){
                    sortedHistory = history.slice().sort((a,b) => (a.kda > b.kda) ? 1 : -1)
                }
                if(filter === (SHOW_KDA_LOW)){
                    sortedHistory = history.slice().sort((a,b) => (a.kda < b.kda) ? 1 : -1)
                }

                setFilteredHistory(sortedHistory);
            }

            
        }

    },[filter,history])


    if (!pending){
        return(<div>
            <select onChange={handleFilter}>
                <option value={SHOW_ALL}>All</option>
                <option value={SHOW_VICTORY}>Victory</option>
                <option value={SHOW_DEFEAT}>Defeat</option>
                <option value={SHOW_SOLO}>Solo</option>
                <option value={SHOW_FLEX}>Flex</option>
                <option value={SHOW_KDA_HIGH}>Kda High</option>
                <option value={SHOW_KDA_LOW}>Kda Low</option>
                <option value={SHOW_DURATION_HIGH}>Duration High</option>
                <option value={SHOW_DURATION_LOW}>Duration Low</option>
            </select>
            <br></br>
            <div className='HISTORY_LIST_CONT'>
                {(filteredHistory.length > 0) ? filteredHistory.map(match => (
                    <li key={match.id} className='MATCH_LIST_ITEM'>
                        <LazyLoad>
                            <MatchHistory match={match}/>
                        </LazyLoad>
                    </li>)) : null}
            </div>
        </div>);
    }
    else return(<div>Loading...</div>);

}

export default HistoryList;
