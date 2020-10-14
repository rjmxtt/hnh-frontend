import React, {useReducer, useEffect} from 'react';
import axios from 'axios';
import Media from './Media';

const entrysReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_ENTRY_START':
        return {
          ...state,
          isLoaded: false
        };
      case 'FETCH_ENTRY_SUCCESS':
        return {
          ...state,
          isLoaded: true,
          txt: action.payload[0],
          media: action.payload[1]
        };
      default:
        throw new Error();
    }  
}

const Entrys = () => {
    const [entrys, dispatchEntrys] = useReducer(
        entrysReducer,
        {txt: ['hi'], media: [], isLoaded: false}
    );

    useEffect(() => {
        dispatchEntrys({type: 'FETCH_ENTRY_START'})
        axios.get('/entrys')
        .then(res => {
            dispatchEntrys({
                type: 'FETCH_ENTRY_SUCCESS',
                payload: res.data.results
            })
        }) 
    }, []);

    const GetEntrys = () => {
        if (entrys.isLoaded === true) {
            return entrys.txt.map(entry => 
                <div class="entry" id={'entry-'+entry.location} key={entry.id}>
                    <Media payload={entrys.media} id={entry.id} />
                    <div class='entry-text'>
                        <h3>{entry.title}</h3>
                        <p>{entry.body_text}</p>
                    </div>
                </div>
            )
        } else {
            return <p>loading entrys</p>
        }
    }

    return (
        <div class="entrys">
            <GetEntrys/>
        </div>
    )
}

export default Entrys;