const fs = require('fs');
const code = fs.readFileSync('/tmp/target_js.js', 'utf8');

const urls = Array.from(new Set(code.match(/https?:\/\/[^"'\`\s]+/g) || []));
console.log('--- URLS ---');
console.log(urls.slice(0, 30));

const assets = Array.from(new Set(code.match(/\/assets\/[^"'\`\s]+/g) || []));
console.log('--- ASSETS ---');
console.log(assets);
