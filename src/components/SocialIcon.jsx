import React from 'react';

const SocialIcon = ({ className, style, link, icon }) => {
    return (
        <li className='social-icons'>
            <a
                className={className}
                style={style}
                href={link}
                target='_blank'
                rel='noreferrer'
            >
                {icon}
            </a>
        </li>
    );
};

export default SocialIcon;