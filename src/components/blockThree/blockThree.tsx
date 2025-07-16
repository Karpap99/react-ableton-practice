import React from 'react';
import './blockThree.css';

const BlockThree = () => {
    return (
        <div className="block-three">
            <img
                className="block-three-img1"
                src="https://ableton-production.imgix.net/about/photo-1.jpg?fit=crop&h=403&ixjsv=1.1.3&w=403&quot"
                alt="block_image"
            />
            <img
                className="block-three-img2"
                src="https://ableton-production.imgix.net/about/photo-2.jpg?fit=crop&h=242&ixjsv=1.1.3&w=323&quot"
                alt="block_image"
            />
            <div className="block-three-background" />
        </div>
    );
};

export default React.memo(BlockThree);