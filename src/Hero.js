import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Hero = () => {
    const [siteData, setSiteData] = useState({})

    useEffect(() => {
        axios.get('/setup')
        .then(res => setSiteData(res.data.results[0]))
    }, [])
    
    return (
        <div class="hero">
            <div class="site-title"><h1>{siteData.site_name}</h1></div>
            <div class="site-blurb"><p>{siteData.site_blurb}</p></div>
        </div>
    )
}

export default Hero;