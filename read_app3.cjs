const fs = require('fs');
const code = fs.readFileSync('/tmp/app_section.js', 'utf8');

console.log('--- PART 3 (12000-25000) ---');
console.log(code.substring(12000, 25000));
