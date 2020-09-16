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
            {/* <div class='animated-title'>
                <h2 id="h1">h</h2>
                <h2 id="e1">e</h2>
                <h2 id="a1">a</h2>
                <h2 id="d1">d</h2>
                <h2 id="n1">n</h2>
                <h2 id="h2">h</h2>
                <h2 id="a2">a</h2>
                <h2 id="n2">n</h2>
                <h2 id="d2">d</h2>
                <h2 id="s1">s</h2>
            </div> */}
            <div class="site-blurb"><p>{siteData.site_blurb}</p></div>
        </div>
    )
}

export default Hero;