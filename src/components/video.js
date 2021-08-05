import React from 'react';
import { withPrefix } from 'gatsby';
import '../assets/scss/main.scss';

const Video = ({ src }) => {
    return (
        // <>
        <video
            id='demo'
            autoPlay
            muted
            loop
            playsInline
            preload
            style={{
                position: 'fixed',
                zIndex: '-1',
                objectFit:'cover',
                objectPosition: 'center top',
                border: '1.5px solid rgba(80, 80, 80, 0.452)',
                borderRadius: '30px'
            }}
            src={withPrefix(src)}
        >
            <source src={withPrefix(src)} type="video/mp4" />
            Your device does not support playing 'video/mp4' videos
        </video>
        //  <div className="video-overlay"></div>
        //</>
    )
}

export default Video;