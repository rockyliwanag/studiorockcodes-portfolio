import React from 'react';
import { withPrefix } from 'gatsby';
import '../assets/scss/main.scss';

const Video = ({ src }) => {
    return (
        <>
        <video
            id='category'
            autoPlay
            muted
            loop
            playsInline
            preload="true"
            src={withPrefix(src)}
        >
            <source src={withPrefix(src)} type="video/mp4" />
            Your device does not support playing 'video/mp4' videos
        </video>
         <div className="video-overlay"></div>
        </>
    )
}

export default Video;