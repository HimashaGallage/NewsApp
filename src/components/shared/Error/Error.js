import React from 'react';
import { ERROR_MESSAGES } from '../../../utils/strings';

const Error = () => {
    return (
        <div className="flex items-start justify-start h-screen p-4 text-secondary">
            <p className="sm:text-md md:text-lg lg:text-xl font-medium">{ERROR_MESSAGES.ERROR_GENERIC}</p>
        </div>
    );
};

export default Error;