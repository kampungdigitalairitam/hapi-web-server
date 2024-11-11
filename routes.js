const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            const {username = "Strager"} = request.params;
            return `Hello! ${username}`;
        }
    },
    {
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat di akses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        }
    },
    {
        method: 'POST',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat di akses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/profil',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    },
    
];

module.exports = routes;