import React from 'react';
import './blockOne.css';

const BlockOne = () => {
    return (
        <div className="block-one">
            <img src="https://ableton-production.imgix.net/about/header.jpg?auto=format&fit=crop&fm=jpg&h=791&ixjsv=1.1.3&w=1115&quot" alt="block_image" />
            <h2>Ableton</h2>
        </div>
    );
};

export default React.memo(BlockOne);