const { createServer } = require('http')
const next = require('next')

//const port = parseInt(process.env.PORT, 10) || 80
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = new URL(req.url, 'http://w.w')
        const { pathname, query } = parsedUrl

        handle(req, res, parsedUrl)

    }).listen()
})