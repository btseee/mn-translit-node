// Basic number words
const ones = ['', 'нэг', 'хоёр', 'гурав', 'дөрөв', 'тав', 'зургаа', 'долоо', 'найм', 'ес'];
const tens = ['', 'арван', 'хорин', 'гучин', 'дөчин', 'тавин', 'жаран', 'далан', 'наян', 'ерэн'];

// Convert number to Mongolian text
export function numberToMongolian(num: number): string {
  if (num === 0) return 'тэг';
  if (num < 0) return 'хасах ' + numberToMongolian(-num);
  
  // Large scales
  if (num === 1000000000000) return 'их наяд';
  if (num === 1000000000) return 'тэрбум';
  if (num === 1000000) return 'сая';
  if (num === 100000) return 'бум';
  if (num === 10000) return 'түм';
  if (num === 1000) return 'мянга';
  if (num === 100) return 'зуун';
  
  if (num < 10) return ones[num];
  
  // Tens with ones
  if (num < 100) {
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return tens[ten] + (one > 0 ? ' ' + ones[one] : '');
  }
  
  // Hundreds
  if (num < 1000) {
    const hundred = Math.floor(num / 100);
    const rest = num % 100;
    let result = (hundred > 1 ? ones[hundred] + ' ' : '') + 'зуун';
    if (rest > 0) result += ' ' + numberToMongolian(rest);
    return result;
  }
  
  // Thousands
  if (num < 10000) {
    const thousand = Math.floor(num / 1000);
    const rest = num % 1000;
    let result = (thousand > 1 ? ones[thousand] + ' ' : '') + 'мянга';
    if (rest > 0) result += ' ' + numberToMongolian(rest);
    return result;
  }
  
  // Ten thousands
  if (num < 100000) {
    const myriads = Math.floor(num / 10000);
    const rest = num % 10000;
    let result = (myriads > 1 ? ones[myriads] + ' ' : '') + 'түм';
    if (rest > 0) result += ' ' + numberToMongolian(rest);
    return result;
  }
  
  // Hundred thousands
  if (num < 1000000) {
    const lakhs = Math.floor(num / 100000);
    const rest = num % 100000;
    let result = (lakhs > 1 ? ones[lakhs] + ' ' : '') + 'бум';
    if (rest > 0) result += ' ' + numberToMongolian(rest);
    return result;
  }
  
  // Millions
  if (num < 1000000000) {
    const millions = Math.floor(num / 1000000);
    const rest = num % 1000000;
    let result = numberToMongolian(millions) + ' сая';
    if (rest > 0) result += ' ' + numberToMongolian(rest);
    return result;
  }
  
  // Billions
  if (num < 1000000000000) {
    const billions = Math.floor(num / 1000000000);
    const rest = num % 1000000000;
    let result = numberToMongolian(billions) + ' тэрбум';
    if (rest > 0) result += ' ' + numberToMongolian(rest);
    return result;
  }
  
  // Trillions
  const trillions = Math.floor(num / 1000000000000);
  const rest = num % 1000000000000;
  let result = numberToMongolian(trillions) + ' их наяд';
  if (rest > 0) result += ' ' + numberToMongolian(rest);
  return result;
}
