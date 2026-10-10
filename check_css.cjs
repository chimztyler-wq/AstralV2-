const fs = require('fs');
const css = fs.readFileSync('/tmp/target_css.css', 'utf8');

// Find :root and CSS variables
const rootMatch = css.match(/:root\s*\{[^}]+\}/g);
console.log('--- ROOT VARIABLES ---');
console.log(rootMatch ? rootMatch[0] : 'None');

// Find custom classes like section-badge, glass-card, icon-box, etc.
const customSelectors = ['.section-badge', '.glass-card', '.icon-box', '.section-title', '.section-subtitle', '.section-divider', '.animate-'];
for (const sel of customSelectors) {
  let idx = 0;
  while ((idx = css.indexOf(sel, idx)) !== -1) {
    const start = idx;
    const end = css.indexOf('}', start) + 1;
    console.log(css.substring(start, end));
    idx = end;
  }
}

// Find keyframes
const keyframes = css.match(/@keyframes\s+[\w-]+\s*\{[^@]+(?=\})/g) || [];
console.log('--- KEYFRAMES ---');
for (const k of keyframes.slice(0, 10)) {
  console.log(k.substring(0, 200) + '...\n');
}
