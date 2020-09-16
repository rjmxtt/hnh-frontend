import React from 'react';
import {Image} from 'cloudinary-react'; 
import ReactPlayer from 'react-player';

const Media = ({payload, id}) => {
    const data = payload.filter(elem => elem.id === id)
    const lenght = data.length;
    const Dis = () => {
        return data.map(elem => 
            elem.media_type === 'yt' ?
            <ReactPlayer 
                width="100%"
                height="13rem"
                url={elem.media_path}
                playing={false} 
                loop={false} 
                controls={true}
                class='v-element'
                id='yt'
            />
            : elem.media_type === 'c' ?
            <ReactPlayer 
                width="100%"
                height="100%"
                url={elem.media_path}
                autoplay={true}
                muted={true}
                playsinline={true}
                playing={true} 
                loop={true} 
                controls={false}
                class='v-element'
                id='c'
            />
            :
            <Image cloudName="den9a6b4z" 
                publicId={elem.media_path+'.'+elem.media_type} 
                class={'media-element-length-'+lenght} 
                id={'n'+elem.inner_order}
            />
        )
    }

    return (
        <div class='media-wrapper'>
            <Dis/>
        </div>
    )
}

export default Media;