import React from 'react';
import imageData from './image_data';
import ScrapbookImage from './scrapbook_image';
import './scrapbook.css';

export default (props) => {
    const images = imageData.map((item,index) => {
        return <ScrapbookImage key={index} about={item}/>
    });
    return (
        <div className='scrapbook-container'>
            {images}
        </div>
    )
}