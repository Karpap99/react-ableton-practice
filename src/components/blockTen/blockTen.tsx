import React from 'react';

const BlockTen = () => {
    return (
        <div className='block-two'>
            <div>
                <h3>
                    We’re passionate about what we do, but we’re equally passionate about improving who we are.
                </h3>
                <p>
                    We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
                </p>
                <p>
                    Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
                </p>
            </div>
        </div>
    );
};

export default React.memo(BlockTen);