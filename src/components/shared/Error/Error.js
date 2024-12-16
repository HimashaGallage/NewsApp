import React from 'react';
import { strings } from '../../../utils/constants';

const Error = ({error}) => {
    return (
        <div className="flex items-start justify-start h-screen p-4 text-secondary">
            <p className="sm:text-md md:text-lg lg:text-xl font-medium">{strings.ERROR_GENERIC}</p>
        </div>
    );
};

export default Error;