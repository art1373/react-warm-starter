import React, {memo} from 'react';

const Paper = ({ children }) => (
    <div>
        {children}
    </div>
);

export default memo(Paper);
