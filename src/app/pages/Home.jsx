import React, {memo} from 'react';
import Helmet from 'react-helmet';

const Home = () => (
    <div>
        <Helmet title="home"/>
        <div>Home</div>
    </div>
);

export default memo(Home);
