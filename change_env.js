const fs = require('fs');

let env = process.argv[2];

fs.copyFile('public/environment/env.'+env+'.js', 'public/environment/env.js', (err) => {
  if (err) throw err;
});