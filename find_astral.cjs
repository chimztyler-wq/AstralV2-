const fs = require('fs');
const code = fs.readFileSync('/tmp/target_js.js', 'utf8');

// Find where "ASTRAL BEAMS" appears and grab chunks of code around it
let idx = 0;
while ((idx = code.indexOf('ASTRAL BEAMS', idx)) !== -1) {
  const start = Math.max(0, idx - 200);
  const end = Math.min(code.length, idx + 400);
  console.log(`--- MATCH AT ${idx} ---`);
  console.log(code.substring(start, end));
  console.log('\n==============================\n');
  idx += 12;
}
