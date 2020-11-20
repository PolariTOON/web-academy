import http from "http";
import url from "url";
import fs from "fs";
const contentTypes = Object.assign(Object.create(null), {
	"": "text/plain;charset=utf-8",
	"/": "text/html;charset=utf-8",
	".txt": "text/plain;charset=utf-8",
	".xml": "text/xml;charset=utf-8",
	".html": "text/html;charset=utf-8",
	".svg": "image/svg+xml;charset=utf-8",
	".mathml": "application/mathml+xml;charset=utf-8",
	".css": "text/css;charset=utf-8",
	".js": "text/javascript;charset=utf-8",
	".json": "application/json;charset=utf-8",
	".ico": "image/png",
	".png": "image/png",
	".jpeg": "image/jpeg",
	".ogg": "video/ogg",
	".pdf": "application/pdf",
	".woff2": "font/woff2",
});
const address = new URL(process.argv[2]);
const {origin, port} = address;
const here = import.meta.url;
const root = here.slice(0, here.lastIndexOf("/"));
const server = http.createServer(async (request, response) => {
	let content, contentType;
	try {
		const {pathname, search} = new URL(request.url, origin);
		const extension = pathname.endsWith("/") ? "/" : pathname.slice(~(~pathname.lastIndexOf(".") || ~pathname.length));
		if (extension === "") {
			content = "302 Found";
			contentType = contentTypes[""];
			response.statusCode = 302;
			response.setHeader("Location", `${pathname}/${search}`);
		} else {
			content = await fs.promises.readFile(url.fileURLToPath(`${root}${pathname}${extension === "/" ? "index.html" : ""}`));
			contentType = contentTypes[extension in contentTypes ? extension : ""];
			response.statusCode = 200;
		}
	} catch (error) {
		console.warn(error.message);
		content = "404 Not Found";
		contentType = contentTypes[""];
		response.statusCode = 404;
	}
	response.setHeader("Content-Type", contentType);
	response.end(content);
});
server.listen(Number(port), () => {
	const {port} = server.address();
	address.port = port;
	console.log(`Server listening on port ${port} (${address})`);
});
