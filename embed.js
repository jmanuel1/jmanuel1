const { readFileSync, writeFileSync } = require('fs');
let file = readFileSync('header.svg', 'utf-8');
const image = readFileSync('me.jpg');
file = file.replace('{{./me.jpg}}', 'data:image/jpeg;base64,' + image.toString('base64'));

writeFileSync('header.build.svg', file);
