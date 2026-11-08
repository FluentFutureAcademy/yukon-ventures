// Bakes the rendered page into dist/index.html so content paints before JavaScript runs.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = path.join(root, "dist-ssr");
const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const file = path.join(root, "dist", "index.html");
const html = fs.readFileSync(file, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("prerender: #root placeholder not found");
fs.writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log("prerendered dist/index.html");
