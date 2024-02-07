'use strict'; 

import  * as Hapi from "@hapi/hapi";

import {Routes} from "./routes/routes";

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    
    server.route(Routes);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();