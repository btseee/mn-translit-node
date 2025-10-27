const { 
  latinToCyrillic, 
  cyrillicToLatin, 
  numberToMongolian,
  validateEnvironment,
  getNodeVersion,
  checkMinimumNodeVersion,
  replaceAll,
  hasOwn
} = require('../dist/index.js');

console.log('='.repeat(60));
console.log('Node.js Compatibility Test Suite');
console.log('='.repeat(60));

console.log('\n[Test 1] Environment Validation');
const envCheck = validateEnvironment();
const nodeVersion = getNodeVersion();
console.log(`✓ Node.js version: ${nodeVersion.major}.${nodeVersion.minor}.${nodeVersion.patch}`);
console.log(`✓ Environment supported: ${envCheck.supported}`);
if (envCheck.warnings.length > 0) {
  console.warn('⚠ Warnings:', envCheck.warnings);
}

console.log('\n[Test 2] Version Checks');
console.log(`✓ Node 14+: ${checkMinimumNodeVersion(14)}`);
console.log(`✓ Node 16+: ${checkMinimumNodeVersion(16)}`);
console.log(`✓ Node 18+: ${checkMinimumNodeVersion(18)}`);

console.log('\n[Test 3] String replaceAll Polyfill');
const testStr = 'hello world hello';
const result = replaceAll(testStr, 'hello', 'hi');
console.log(`✓ replaceAll("${testStr}", "hello", "hi") = "${result}"`);
if (result !== 'hi world hi') {
  console.error('✗ FAILED: replaceAll polyfill');
  process.exit(1);
}

console.log('\n[Test 4] Object hasOwn Polyfill');
const testObj = { foo: 'bar', baz: 123 };
console.log(`✓ hasOwn({ foo: 'bar' }, 'foo') = ${hasOwn(testObj, 'foo')}`);
console.log(`✓ hasOwn({ foo: 'bar' }, 'missing') = ${hasOwn(testObj, 'missing')}`);
if (!hasOwn(testObj, 'foo') || hasOwn(testObj, 'missing')) {
  console.error('✗ FAILED: hasOwn polyfill');
  process.exit(1);
}

console.log('\n[Test 5] Latin to Cyrillic Transliteration');
const tests = [
  { input: 'sain baina uu', expected: 'сайн байна уу' },
  { input: 'mongol', expected: 'монгол' },
  { input: 'ai', expected: 'ай' },
  { input: 'ei', expected: 'эй' }
];

for (const test of tests) {
  const result = latinToCyrillic(test.input);
  const passed = result === test.expected;
  console.log(`${passed ? '✓' : '✗'} "${test.input}" → "${result}" ${passed ? '' : `(expected: "${test.expected}")`}`);
  if (!passed) {
    console.error('✗ FAILED: latinToCyrillic');
    process.exit(1);
  }
}

console.log('\n[Test 6] Cyrillic to Latin Transliteration');
const cyrillicTests = [
  { input: 'сайн байна уу', expected: 'sain baina uu' },
  { input: 'монгол', expected: 'mongol' }
];

for (const test of cyrillicTests) {
  const result = cyrillicToLatin(test.input);
  const passed = result === test.expected;
  console.log(`${passed ? '✓' : '✗'} "${test.input}" → "${result}" ${passed ? '' : `(expected: "${test.expected}")`}`);
  if (!passed) {
    console.error('✗ FAILED: cyrillicToLatin');
    process.exit(1);
  }
}

console.log('\n[Test 7] Number to Mongolian Conversion');
const numberTests = [
  { input: 0, expected: 'тэг' },
  { input: 21, expected: 'хорин нэг' },
  { input: 100, expected: 'зуун' },
  { input: 1000, expected: 'мянга' },
  { input: 1000000, expected: 'сая' }
];

for (const test of numberTests) {
  const result = numberToMongolian(test.input);
  const passed = result === test.expected;
  console.log(`${passed ? '✓' : '✗'} ${test.input} → "${result}" ${passed ? '' : `(expected: "${test.expected}")`}`);
  if (!passed) {
    console.error('✗ FAILED: numberToMongolian');
    process.exit(1);
  }
}

console.log('\n[Test 8] Edge Cases');
console.log(`✓ latinToCyrillic('') = "${latinToCyrillic('')}"`);
console.log(`✓ cyrillicToLatin('') = "${cyrillicToLatin('')}"`);
console.log(`✓ numberToMongolian(-5) = "${numberToMongolian(-5)}"`);

console.log('\n[Test 9] Performance Check');
const longText = 'mongol uls '.repeat(1000);
const start = Date.now();
const translitResult = latinToCyrillic(longText);
const elapsed = Date.now() - start;
console.log(`✓ Transliterated ${longText.length} characters in ${elapsed}ms`);
console.log(`✓ Performance: ${(longText.length / elapsed).toFixed(2)} chars/ms`);

console.log('\n[Test 10] Type Safety');
try {
  latinToCyrillic('test');
  cyrillicToLatin('тест');
  numberToMongolian(42);
  console.log('✓ All type-safe operations completed');
} catch (error) {
  console.error('✗ FAILED: Type safety issue', error);
  process.exit(1);
}

console.log('\n' + '='.repeat(60));
console.log('✅ All compatibility tests passed!');
console.log('='.repeat(60));
console.log(`\nEnvironment: Node.js ${nodeVersion.major}.${nodeVersion.minor}.${nodeVersion.patch}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log('='.repeat(60));
