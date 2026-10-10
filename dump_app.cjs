const fs = require('fs');
const code = fs.readFileSync('/tmp/target_js.js', 'utf8');

const appSection = code.substring(315000);
fs.writeFileSync('/tmp/app_section.js', appSection);
console.log('App section length:', appSection.length);
