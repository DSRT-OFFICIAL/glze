const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname); // /examples/
const OUTPUT = path.join(ROOT, "index.html");

const categories = fs
  .readdirSync(ROOT)
  .filter((f) => fs.statSync(path.join(ROOT, f)).isDirectory() && f !== "node_modules");

let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>glze – Math Examples</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #111;
      color: #eee;
      margin: 0;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #6cf;
    }
    .category {
      margin-bottom: 25px;
    }
    .category h2 {
      color: #ffcc66;
      margin-bottom: 10px;
      border-bottom: 1px solid #444;
      padding-bottom: 5px;
    }
    ul { list-style: none; padding-left: 15px; }
    li { margin: 5px 0; }
    a { color: #9cf; text-decoration: none; }
    a:hover { text-decoration: underline; color: #fff; }
  </style>
</head>
<body>
  <h1>📊 glze – Math Examples</h1>
`;

for (const category of categories) {
  const files = fs
    .readdirSync(path.join(ROOT, category))
    .filter((f) => f.endsWith(".html"));

  if (files.length > 0) {
    html += `<div class="category">\n<h2>${category.replace(/_/g, " ")}</h2>\n<ul>\n`;
    for (const file of files) {
      const name = file.replace(".html", "").replace(/_/g, " ");
      html += `<li><a href="./${category}/${file}">${name}</a></li>\n`;
    }
    html += `</ul>\n</div>\n`;
  }
}

html += `</body>\n</html>`;

fs.writeFileSync(OUTPUT, html, "utf-8");
console.log(`✅ index.html generated at ${OUTPUT}`);
