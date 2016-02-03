# Falcor Express Middleware Demonstration

This project is a demonstration of how to create a stateless Virtual JSON Graph object on your application server using a Falcor Router and some express middleware.

## Getting Started

Clone the repo: `https://github.com/Netflix/falcor-express-demo.git`

``` sh
cd falcor-express-demo
npm install
npm start
```

Open your browser and visit: [http://localhost:9090](http://localhost:9090)

## Notes

Changing the `index.html` file will refresh the browser automatically using
[LiveReload][2]. Changing the server `index.js` file will restart the server
using [nodemon][1].

This will download a webpage which makes several requests from data from the model.json resource on the application server, and prints the results to the console.  You will not see anything on your screen until you open up the developer console. Checkout the source of the website to see what types of operations can be performed on the model.json file on the server.

For more information on how the Router works and the structure of model.json, see the Router source at https://github.com/Netflix/falcor-router-demo.



[1]: https://www.npmjs.com/package/nodemon    "nodemon"
[2]: https://www.npmjs.com/package/livereload    "livereload"
