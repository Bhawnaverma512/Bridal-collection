import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname } from "node:path";
const root = new URL("./", import.meta.url);
const types = { ".html": "text/html; charset=utf-8", ".jpg": "image/jpeg", ".webp": "image/webp", ".png": "image/png" };
const port = 5173;
createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path === "/" || !path.startsWith("/img/")) path = "/index.html";
  try {
    const body = await readFile(new URL("." + path, root));
    res.writeHead(200, { "Content-Type": types[extname(path)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404); res.end("Not found");
  }
}).listen(port, () => console.log(`Bridal Atelier preview running at http://localhost:${port}`));
