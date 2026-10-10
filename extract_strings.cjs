const fs = require('fs');
const code = fs.readFileSync('/tmp/target_js.js', 'utf8');

// Let's search for text strings that look like UI text
const matches = code.match(/"([^"\\]|\\.)*"/g) || [];
const stringList = Array.from(new Set(matches.map(s => {
  try { return JSON.parse(s); } catch (e) { return s; }
}))).filter(s => typeof s === 'string' && s.length > 3 && !s.startsWith('http') && !s.includes(';'));

console.log('Total strings:', stringList.length);

// Let's filter interesting text
const uiStrings = stringList.filter(s => 
  s.includes('ASTRAL') || s.includes('Beam') || s.includes('Discord') || 
  s.includes('Feature') || s.includes('Pricing') || s.includes('Contact') ||
  s.includes('Vouches') || s.includes('Site') || s.includes('Bot') || s.includes('Server') ||
  s.includes('Join') || s.includes('Free') || s.includes('Premium') || s.includes('Roblox')
);
console.log('UI Strings:', uiStrings);
