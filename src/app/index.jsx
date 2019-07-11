import React from 'react';
import Helmet from 'react-helmet';
import Routes from '~/app/routes/Routes';

const Index = () => (
    <>
        <Helmet
            htmlAttributes={{lang: "en", amp: undefined}}
            titleTemplate="%s | iran-react-community"
            titleAttributes={{itemprop: "name", lang: "en"}}
            meta={[
                {name: "description", content: "Iran React Community"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
            ]}
            script={[
                {src: "/assets/js/vendor.js", defer: undefined},
                {src: "/assets/js/client.js", defer: undefined},
            ]}
        />
        <Routes/>
    </>
);

export default Index;
