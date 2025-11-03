const fs = require("fs");
const path = require("path");

const distIndex = path.join(__dirname, "..", "dist", "index.html");

if (!fs.existsSync(distIndex)) {
  console.error("dist/index.html not found — make sure the build ran first");
  process.exit(1);
}

let html = fs.readFileSync(distIndex, "utf8");

// Replace leading-slash absolute asset references with relative ones
html = html.replace(/src="\/assets\//g, 'src="./assets/');
html = html.replace(/href="\/assets\//g, 'href="./assets/');

fs.writeFileSync(distIndex, html, "utf8");
console.log("postbuild: fixed asset paths in dist/index.html");
