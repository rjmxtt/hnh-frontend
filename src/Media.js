import React, {useReducer} from 'react';
import {Image} from 'cloudinary-react'; 
import ReactPlayer from 'react-player';
import { Transformation } from 'cloudinary-core';

// const mediaReducer = (state, action) => {
//     switch (action.type) {
//       case 'FETCH_MEDIA_START':
//         return {
//           ...state,
//           isLoaded: false
//         };
//       case 'FETCH_MEDIA_SUCCESS':
//         return {
//           ...state,
//           isLoaded: true,
//           media: action.payload
//         };
//       default:
//         throw new Error();
//     }  
// }

const Media = ({payload, id}) => {
    // const [comSpecMedia, despatchComSpecMedia] = useReducer(
    //     mediaReducer,
    //     {media: /*reference to loading*/{}, isLoaded: false}
    // );

    // useEffect(() => {
    //     despatchComSpecMedia({type: 'FETCH_ENTRY_START'})
    //     axios.get('/entrys')
    //     .then(res => {
    //         dispatchEntrys({
    //             type: 'FETCH_ENTRY_SUCCESS',
    //             payload: res.data.results
    //         })
    //     }) 
    // }, []);

    const data = payload.filter(elem => elem.id === id)
    const length = data.length;
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
                autoPlay={true}
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
                // publicId={elem.media_path+'.wdp'}
                class={'media-element-length-'+length} 
                id={'n'+elem.inner_order}
            >
                <Transformation flags="progressive:steep" quality="auto:best" />
            </Image>
        )
    }

    return (
        <div class='media-wrapper'>
            <Dis/>
        </div>
    )
}

export default Media;