import React from 'react';
import './blockTwo.css';

const BlockTwo = () => {
    return (
        <div className='block-two'>
            <div>
                <h3>
                    We make <span className="block-two-decorated">Live</span>, <span className="block-two-decorated">Push</span> and <span className="block-two-decorated">Link</span> - unique software and hardware for music creation and performance.
                    With these products, ourcommunity of users creates amazing things.
                </h3>
                <p>
                    Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used
                    by a community of dedicated musicians, sound designers, and artists from across the world.
                </p>
            </div>
        </div>
    );
};

export default React.memo(BlockTwo);