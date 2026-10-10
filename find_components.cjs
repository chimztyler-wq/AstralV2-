const fs = require('fs');
const code = fs.readFileSync('/tmp/app_section.js', 'utf8');

// Let's find component definitions like iC=, lC=, uC=, cC=, dC=, fC=, pC=, hC=, mC=, vC=, gC=
const compNames = ['iC', 'lC', 'uC', 'cC', 'dC', 'fC', 'pC', 'hC', 'mC', 'vC', 'gC', 'rC', 'aC', 'eC', 'iv', 'sv', 'lv', 'av'];
for (const name of compNames) {
  const regex = new RegExp(`const ${name}\\s*=|var ${name}\\s*=|${name}\\s*=\\s*\\(`, 'g');
  let match;
  while ((match = regex.exec(code)) !== null) {
    console.log(`=== COMPONENT ${name} at ${match.index} ===`);
    console.log(code.substring(match.index, match.index + 1500));
  }
}
