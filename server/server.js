import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import  App  from '../client/app'
import { StaticRouter } from 'react-router-dom/server';
import { BrowserRouter } from 'react-router-dom';
const server = express()
 
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))
 
server.use('/', express.static(path.join(__dirname, 'static')))
 
const manifest = fs.readFileSync(
  path.join(__dirname, 'static/manifest.json'),
  'utf-8'
)
const assets = JSON.parse(manifest)

 
// server.get('/', (req, res) => {
//   const component = ReactDOMServer.renderToString(React.createElement(App))
//   res.render('client', { assets, component })
// })

server.get("*", (req, res) => {
  const context = {};
  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  res.render('client', { assets, component })
})



server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})