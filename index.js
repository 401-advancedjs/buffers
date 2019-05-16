'use strict';

const fs = require('fs');

const loopCode = `'use strict';
const nameArrays = ['Melissa', 'Kevin', 'Wallace'];
nameArrays.forEach(name => {
  console.log(name);
});
`;

let buffer = Buffer.alloc(0);
let totalLength = 0;
let buff1 = Buffer.alloc(1);

loopCode.split('').forEach(char => {
  buff1[0] = char.charCodeAt(0);
  totalLength = totalLength + buff1.length;
  buffer = Buffer.concat([buffer, buff1], totalLength);
});


fs.writeFile('files/loop.js', buffer, (err) => {
  if (err) throw err;
  console.log('writing the file');
});






// const fs = require('fs');
// const util = require('util');

// const test = fs.readFile('files/pair-programming.txt', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });