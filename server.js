import http from "http";
import { readFile } from "fs/promises";
import { extname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PORT = 4400;

const mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
};

const server = http.createServer(async (req, res) => {
    const filePath = join(__dirname, req.url === "/" ? "index.html" : req.url);
    const ext = extname(filePath);

    try {
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "text/plain" });
        res.end(data);
    } catch {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
