import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT = "src/assets/showcase";
const del = process.argv.includes("--delete");

for (const dir of fs.readdirSync(ROOT, { withFileTypes: true }).filter((d) => d.isDirectory())) {
  for (const file of fs.readdirSync(path.join(ROOT, dir.name))) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const input = path.join(ROOT, dir.name, file);
    const output = input.replace(/\.[^.]+$/, ".webp");
    await sharp(input).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
    const before = (fs.statSync(input).size / 1024).toFixed(0);
    const after = (fs.statSync(output).size / 1024).toFixed(0);
    if (del) fs.unlinkSync(input);
    console.log(`${dir.name}/${file}: ${before} KB -> ${after} KB`);
  }
}