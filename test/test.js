const { latinToCyrillic, cyrillicToLatin, numberToMongolian } = require('../dist/index.js');

console.log('Testing Latin to Cyrillic:');
console.log('sain baina uu ->', latinToCyrillic('sain baina uu'));
console.log('mongol ->', latinToCyrillic('mongol'));
console.log('ai ->', latinToCyrillic('ai'));
console.log('ei ->', latinToCyrillic('ei'));
console.log('ii ->', latinToCyrillic('ii'));
console.log('oi ->', latinToCyrillic('oi'));

console.log('\nTesting Cyrillic to Latin:');
console.log('сайн байна уу ->', cyrillicToLatin('сайн байна уу'));
console.log('монгол ->', cyrillicToLatin('монгол'));

console.log('\nTesting Number to Mongolian:');
console.log('21 ->', numberToMongolian(21));
console.log('31 ->', numberToMongolian(31));
console.log('41 ->', numberToMongolian(41));
console.log('51 ->', numberToMongolian(51));
console.log('61 ->', numberToMongolian(61));
console.log('71 ->', numberToMongolian(71));
console.log('81 ->', numberToMongolian(81));
console.log('91 ->', numberToMongolian(91));
console.log('111 ->', numberToMongolian(111));
console.log('230 ->', numberToMongolian(230));
console.log('100 ->', numberToMongolian(100));
console.log('1000 ->', numberToMongolian(1000));
console.log('10000 ->', numberToMongolian(10000));
console.log('100000 ->', numberToMongolian(100000));
console.log('1000000 ->', numberToMongolian(1000000));
console.log('1000000000 ->', numberToMongolian(1000000000));
console.log('1000000000000 ->', numberToMongolian(1000000000000));

console.log('\n✅ All tests completed!');
