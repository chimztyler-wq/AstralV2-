const fs = require('fs');
const css = fs.readFileSync('/tmp/target_css.css', 'utf8');

// Find body or * {
const bodyIdx = css.indexOf('body{');
if (bodyIdx !== -1) {
  console.log(css.substring(bodyIdx - 100, bodyIdx + 400));
}

// Find font family
const fontMatches = css.match(/font-family:[^;}]+/g);
console.log('Font families:', fontMatches);
