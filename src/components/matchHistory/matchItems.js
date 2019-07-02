import React from 'react';
import './matchItems.css';

import item1 from '../../assets/items/item1.png';
import item2 from '../../assets/items/item2.png';
import item3 from '../../assets/items/item3.png';
import item4 from '../../assets/items/item4.png';
import item5 from '../../assets/items/item5.png';
import item6 from '../../assets/items/item6.png';
import item7 from '../../assets/items/item7.png';
import item8 from '../../assets/items/item8.png';

const MatchItems = () => {

    return(
        <div className='MATCH_ITEMS_CONT'>
            <img className='MATCH_ITEM_IMG' src={item1} alt=""/>
            <img className='MATCH_ITEM_IMG' src={item2} alt=""/>
            <img className='MATCH_ITEM_IMG' src={item3} alt=""/>
            <img className='MATCH_ITEM_IMG' src={item4} alt=""/>
            <img className='MATCH_ITEM_IMG' src={item5} alt=""/>
            <img className='MATCH_ITEM_IMG' src={item6} alt=""/>
            <img className='MATCH_ITEM_IMG' src={item7} alt=""/>
            <img className='MATCH_ITEM_IMG' src={item8} alt=""/>
        </div>
    );
}

export default MatchItems;