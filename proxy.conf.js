let loggedIn = false;

const PROXY_CONFIG = {
    '/api': {
        'target': 'http://localhost:4200',
        'bypass': function (req, res, proxyOptions) {
            if (req.url.startsWith('/api/articles')) {
                if (req.method === 'GET') {
                    const articles = [
                        {
                            id: 'article-1',
                            title: 'Test article 1',
                            author: 'John Smith',
                            content: 'This is the body of article 1.'
                        },
                        {
                            id: 'article-2',
                            title: 'Test article 2',
                            author: 'Jane Doe',
                            content: 'This is the body of article 2.'
                        },
                        {
                            id: 'article-3',
                            title: 'Test article 3',
                            author: 'Daniel John',
                            content: 'This is the body of article 3.'
                        },
                        {
                            id: 'article-4',
                            title: 'Test article 4',
                            author: 'Albert Daniels',
                            content: 'This is the body of article 4.'
                        }
                    ];
                    res.end(JSON.stringify({articles}));
                } else {
                    res.status(400).end(JSON.stringify('Route does not support that method.'));
                }
            } else if (req.url.startsWith('/api/auth')) {
                if (req.method !== 'POST' && req.method !== 'GET') {
                    res.status(400).end(JSON.stringify('Route does not support that method.'));
                } else if (req.method === 'GET') {
                    const user = {firstName: 'John', lastName: 'Smith'};
                    res.status(!loggedIn ? 404 : 200).end(!loggedIn ? JSON.stringify('No logged in user.') : JSON.stringify(user));
                } else {
                    const username = req && req.query && req.query.username;
                    const password = req && req.query && req.query.password;
                    if (username === 'admin' && (password === 'password')) {
                        loggedIn = true;
                        res.end(JSON.stringify("Success!"));
                    }
                    res.status(400).end(JSON.stringify('Bad Credentials!'));
                }
                return true;
            } else if (req.url.startsWith('/api/logout')) {
                loggedIn = false;
                res.status(200).end(JSON.stringify('User logged out.'));
                return true;
            }

            return false;
        }
    }
}

module.exports = PROXY_CONFIG;
