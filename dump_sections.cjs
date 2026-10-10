const fs = require('fs');
const code = fs.readFileSync('/tmp/app_section.js', 'utf8');

function getSnippet(label, startStr, len = 2500) {
  const idx = code.indexOf(startStr);
  console.log(`\n=================== ${label} (pos: ${idx}) ===================\n`);
  if (idx !== -1) {
    console.log(code.substring(idx, idx + len));
  } else {
    console.log('NOT FOUND');
  }
}

getSnippet('iC (Background Canvas)', 'iC=');
getSnippet('lC (Navbar)', 'lC=');
getSnippet('dC (Services)', 'dC=');
getSnippet('fC (How It Works)', 'fC=');
getSnippet('pC (Features)', 'pC=');
getSnippet('hC (Testimonials)', 'hC=');
