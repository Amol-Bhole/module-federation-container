# Microfrontends Container

Is built using JavaScript, Html, Css, faker, Webpack

Steps to start
### clone, install and npm start https://github.com/Amol-Bhole/module-federation-products
### clone, install and npm start https://github.com/Amol-Bhole/module-federation-cart
### npm install
### npm start

## webpack.config.js

dev server is initialized on port 8080.
ModuleFedrationPlugin request 2 remote modules. namely products and cart. Hosted at http://localhost:8081/remoteEntry.js" and http://localhost:8082/remoteEntry.js respectively.

## src/utils/globalContext.js

Microfrontends containers Global Context tobe passed to children SubApps.

## src/index.js

Is dynamically importing bootstrap.js to allow webpack's ModuleFedrationPlugin to request dependencies asynchronously.

## src/bootstrap.js

mount function is imported from productsMount and cartsMount SubApps (configuered using Webpack's ModuleFedrationPlugin)

Mounted the Carts and Products sub app using there respective mount functions, by passing element (from container) and containersGobalContext

# Container Microfrontends Output

Once we run Container repo, output will be as belows

https://github.com/Amol-Bhole/module-federation-container/blob/main/src/assets/image.jpg?raw=true
