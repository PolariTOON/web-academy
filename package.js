"use strict";
const HTTP = require ("http");
const {URL} = require ("url");
const FileSystem = require ("fs");
const contentTypes = {
	"": "text/plain;charset=utf-8",
	"/": "text/html;charset=utf-8",
	".txt": "text/plain;charset=utf-8",
	".xml": "text/xml;charset=utf-8",
	".html": "text/html;charset=utf-8",
	".svg": "image/svg+xml;charset=utf-8",
	".mathml": "application/mathml+xml;charset=utf-8",
	".css": "text/css;charset=utf-8",
	".mjs": "text/javascript;charset=utf-8",
	".js": "text/javascript;charset=utf-8",
	".json": "application/json;charset=utf-8",
	".ico": "image/png",
	".png": "image/png",
	".jpg": "image/jpg",
	".pdf": "application/pdf",
	".woff": "font/woff",
	".woff2": "font/woff2"
};
const {origin, port} = new URL (process.argv [2]);
const root = __dirname;
HTTP.createServer ((request, response) => {
	let content, contentType;
	try {
		const pathname = new URL (request.url, origin).pathname;
		const extension = pathname.endsWith ("/") ? "/" : pathname.slice (~(~pathname.lastIndexOf (".") || ~pathname.length));
		content = FileSystem.readFileSync (root + pathname + (extension === "/" ? "index.html" : ""));
		contentType = contentTypes.hasOwnProperty (extension) ? contentTypes [extension] : contentTypes [""];
		response.statusCode = 200;
	} catch (error) {
		console.warn (error.message);
		content = `<!DOCTYPE html>
<html dir="ltr" lang="fr">
	<head>
		<title>Erreur 404</title>
		<meta name="viewport" content="width=device-width"/>
		<style>
			@import url("/resources/main.css");
			html {
				background-color: #eee;
			}
			body {
				display: grid;
				grid-gap: 2rem;
				align-content: center;
				justify-items: center;
				height: 100vh;
				text-align: center;
			}
			h1 {
				font-size: 16rem;
				margin: 0;
				padding: 2rem;
			}
			p {
				font-size: 1.6rem;
				margin: 0;
				padding: 1rem;
			}
		</style>
	</head>
	<body>
		<h1>404</h1>
		<p>Oups ! On dirait que vous êtes perdu…</p>
	</body>
</html>
`;
		contentType = contentTypes ["/"];
		response.statusCode = 404;
	};
	response.setHeader ("Content-Type", contentType);
	response.end (content);
}).listen (Number (port));
