import { latinToCyrillic, cyrillicToLatin, numberToMongolian } from '../dist/index';

console.log('=== TypeScript Example ===\n');

const text1: string = 'sain baina uu';
const result1: string = latinToCyrillic(text1);
console.log(`Latin to Cyrillic: "${text1}" -> "${result1}"`);

const text2: string = 'монгол';
const result2: string = cyrillicToLatin(text2);
console.log(`Cyrillic to Latin: "${text2}" -> "${result2}"`);

const num: number = 1000;
const result3: string = numberToMongolian(num);
console.log(`Number to text: ${num} -> "${result3}"`);

console.log('\n✅ TypeScript works!');
