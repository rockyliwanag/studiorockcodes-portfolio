import React from 'react';
import { withPrefix } from 'gatsby';
import '../assets/scss/main.scss';

export default ({ src }) => {
    return (
        // <>
        <video
            id='demo'
            autoPlay
            muted
            loop
            playsInline
            style={{
                position: 'fixed',
                // height: '500px',
                // width: '300px',
                zIndex: '-1',
                objectFit:'cover',
                objectPosition: 'center top',
                border: '1px solid rgba(80, 80, 80, 0.452)',
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