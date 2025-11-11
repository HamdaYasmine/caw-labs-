const fs = require('fs');
let filename = process.argv[2];
let content = fs.readFileSync(filename, "utf8");
console.log(content);