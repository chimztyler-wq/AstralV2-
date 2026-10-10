const fs = require('fs');
const code = fs.readFileSync('/tmp/app_section.js', 'utf8');

// Print 4000 to 12000
console.log('--- PART 2 (4000-12000) ---');
console.log(code.substring(4000, 12000));
