import React from 'react';
import './blockNine.css';

const BlockNine = () => {
    return (
        <div className="block-nine">
            <img
                className="block-nine-img1"
                src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&dpr=2&fit=crop&fm=jpg&ixjsv=1.1.3&q=50&w=640"
                alt="block_image"
            />
        </div>
    );
};

export default React.memo(BlockNine);