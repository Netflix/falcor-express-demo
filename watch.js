var livereload = require('livereload');

server = livereload.createServer({
    originalPath: "http://localhost:9090"
});

server.watch([__dirname]);
