import React, {useEffect, useState} from 'react';
import Connect from './Connect';
import axios from 'axios';
import { set } from 'lodash';

const Navbar = () => {
    const [siteData, setSiteData] = useState({})
    const [showConnect, setShowConnect] = useState(false);

    useEffect(() => {
        axios.get('/setup')
        .then(res => setSiteData(res.data.results[0]))
    }, [])

    const connectHandler = () => {
        if (showConnect) {setShowConnect(false)} else {setShowConnect(true)} 
    }

    return (
        <div class="navbar">
            <ul>
                <li><a href="#">hnh</a></li>
                <div>{siteData.shop ? <li class="right"><a href="#">shop</a></li> : <a></a>}</div>
                
                <div>{siteData.connect ? 
                    <li class="right">
                        <a href="#" onClick={connectHandler}>connect</a>
                    </li>
                    : 
                    <a></a>}
                </div>
            </ul>
            <div class='connect-wrapper'>{showConnect ? 
                <Connect handler={connectHandler}/> 
                :
                <div class='empty-div'></div>}
            </div>
        </div>
    )
}

export default Navbar; 