const http = require("http");
const server = http.createServer((req, res) => {
	res.end(`<h1>Ezeanaka Nathaniel is here to conquer node.js<h1>`);
});

server.listen(8900, null, null, () => {
	console.log("sever is on on port 8900");
});
