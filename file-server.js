var http = require("http"),
    fs = require("fs");

var methods = Object.create(null);

http.createServer(function (request, response) {
    function respond(code, body, type) {
        if (!type) type = "text/plain";
        response.writeHead(code, {
            "Content-Type": type
        });
        if (body && body.pipe) body.pipe(response);
        else response.end(body);
    }
    if (request.method in methods) methods[request.method](urlToPath(request.url),
        respond, request);
    else respond(405, "Method " + request.method + " not allowed.");
}).listen(8000, '127.0.0.1', () => {
    console.log('ok')
});

function urlToPath(url) {
    var path = require("url").parse(url).pathname;
    return "." + decodeURIComponent(path);
}

methods.GET = function (path, respond) {
    fs.stat(path, function (error, stats) {
        if (error && error.code == "ENOENT") respond(404, "File not found");
        else if (error) respond(500, error.toString());
        else if (stats.isDirectory()) fs.readdir(path, { withFileTypes: true }, function (error, files) {
            if (error) {
                respond(500, error.toString())
            } else {
                respond(200, files.map(it => it.isFile() ? it.name : it.name + '/').join("\n"), 'text/plain; charset=utf-8');
            }
        });
        else respond(200, fs.createReadStream(path),
            require("mime").getType(path));
    });
};

methods.DELETE = function (path, respond) {
    fs.stat(path, function (error, stats) {
        if (error && error.code == "ENOENT") respond(204);
        else if (error) respond(500, error.toString());
        else if (stats.isDirectory()) fs.rmdir(path, respondErrorOrNothing(respond));
        else fs.unlink(path, respondErrorOrNothing(respond));
    });
};

function respondErrorOrNothing(respond) {
    return function (error) {
        if (error) respond(500, error.toString());
        else respond(204);
    };
}

methods.PUT = function (path, respond, request) {
    var outStream = fs.createWriteStream(path);
    outStream.on("error", function (error) {
        respond(500, error.toString());
    });
    outStream.on("finish", function () {
        respond(204);
    });
    request.pipe(outStream);
};
