import React from 'react';

const Logo = ({ type = 'default' }) => {
    let logoSrc = '/images/logo.svg';
    if (type === 'muted') {
        logoSrc = '/images/logo-muted.svg';
    }

    return <img src={logoSrc} alt="Logo" />;
};

export default Logo;