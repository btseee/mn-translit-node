import { latinToCyrillic, cyrillicToLatin, numberToMongolian } from '../dist/index.js';

console.log('=== JavaScript (ES Module) Example ===\n');

const text1 = 'sain baina uu';
const result1 = latinToCyrillic(text1);
console.log(`Latin to Cyrillic: "${text1}" -> "${result1}"`);

const text2 = 'монгол';
const result2 = cyrillicToLatin(text2);
console.log(`Cyrillic to Latin: "${text2}" -> "${result2}"`);

const num = 1000;
const result3 = numberToMongolian(num);
console.log(`Number to text: ${num} -> "${result3}"`);

console.log('\n✅ JavaScript (ES Module) works!');
