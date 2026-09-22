import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname } from "node:path";
const root = new URL("./", import.meta.url);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject"
};
const port = process.env.PORT || 5173;
createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path === "/" || !path.includes(".")) path = "/index.html";
  try {
    const body = await readFile(new URL("." + path, root));
    res.writeHead(200, { "Content-Type": types[extname(path)] || "text/plain; charset=utf-8" });
    res.end(body);
  } catch {
    res.writeHead(404); res.end("Not found");
  }
}).listen(port, () => console.log(`Bridal Atelier preview running at http://localhost:${port}`));
