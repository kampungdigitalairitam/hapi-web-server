// console.log("Hallo Kita akan membuat web server menggunakan framework hapi");
const Hapi = require('@hapi/hapi');
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    })

    server.route(routes)
    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         return 'Hello World';
    //     }
    // })

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);

}

init();