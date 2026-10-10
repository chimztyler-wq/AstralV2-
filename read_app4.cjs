const fs = require('fs');
const code = fs.readFileSync('/tmp/app_section.js', 'utf8');

console.log('--- PART 4 (24000 to end) ---');
console.log(code.substring(24000));
