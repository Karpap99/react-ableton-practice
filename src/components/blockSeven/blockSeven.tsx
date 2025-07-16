import React from 'react';
import './blockSeven.css';

const BlockSeven = () => {
    return (
        <div className="block-seven">
            <div className="block-seven-left">
                <img
                    className="block-seven-img1"
                    src="https://ableton-production.imgix.net/about/photo-3.jpg?dpr=2&fit=crop&h=165&ixjsv=1.1.3&q=50&w=219&quot"
                    alt="block_image"
                />
                <img
                    className="block-seven-img2"
                    src="https://ableton-production.imgix.net/about/photo-4.jpg?dpr=2&fit=crop&h=165&ixjsv=1.1.3&q=50&w=219&quot"
                    alt="block_image"
                />
            </div>
            <img
                className="block-seven-img3"
                src="https://ableton-production.imgix.net/about/photo-5.jpg?dpr=2&fit=crop&h=274&ixjsv=1.1.3&q=50&w=274&quot"
                alt="block_image"
            />
            <div className="block-seven-background" />
        </div>
    );
};

export default React.memo(BlockSeven);