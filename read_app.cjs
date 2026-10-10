const fs = require('fs');
const code = fs.readFileSync('/tmp/app_section.js', 'utf8');

// Print first 5000 characters
console.log('--- PART 1 (0-5000) ---');
console.log(code.substring(0, 5000));
