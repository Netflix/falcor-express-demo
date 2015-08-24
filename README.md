# Falcor Express Middleware Demonstration

This project is a demonstration of how to create a stateless Virtual JSON Graph object on your application server using a Falcor Router and some express middleware.

## Getting Started

```
clone repo
npm install
npm start
Automatically opens default browser with url http://localhost:9090
```

## Notes

No manual refresh of browser on every change of html file.

1. On every change of html file browser gets reloaded using [browser-sync][2].
1. On every change of index.js, server gets restarted using [gulp-nodemon][1].


This will download a webpage which makes several requests from data from the model.json resource on the application server, and prints the results to the console.  You will not see anything on your screen until you open up the developer console. Checkout the source of the website to see what types of operations can be performed on the model.json file on the server.

For more information on how the Router works and the structure of model.json, see the Router source at https://github.com/Netflix/falcor-router-demo.

--------------
[1]: https://www.npmjs.com/package/gulp-nodemon    "gulp-nodemon"
[2]: https://www.npmjs.com/package/browser-sync    "browser-sync"
--------------