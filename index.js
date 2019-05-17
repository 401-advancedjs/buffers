'use strict';

const fs = require('fs');
const util = require('util');


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
});

const pp = fs.readFileSync('files/pair-programming.txt', (err, data) => {
  if (err) throw err;
});

let bufferArray1 = [];


let startidx = 0;
for(let i = 0; i < pp.length; i++){
  if(pp[i] === 0x0a){
    bufferArray1.push(pp.slice(startidx,i).toString());
    startidx = i;
  }
}
console.log(bufferArray1);


// let finalLength = 0;
// let buff2 = Buffer.alloc(0);
// let startarticle = '<article>';
// let endarticle = '</article>';
// for(let i = 0; i < bufferArray1.length; i++){
//   if(){
//     buff2[0] = 
//     finalLength = finalLength + buff2.length;
//     Buffer.concat([],finalLength);
//   }
// }

// let bufferArray2 =[];
// startidx = 0;
// for(let i = 0; i < bufferArray1.length; i++){
//   for(let j = 0; j < bufferArray1[i].length; j++){
//     if(bufferArray1[i][j] === 0x2e){
//       bufferArray2.push(bufferArray1[i].slice(startidx, j).toString());
//       startidx = j;
//     }
//   }
// }
// console.log(bufferArray2);


