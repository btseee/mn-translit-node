import { latinToCyrillicMap, cyrillicToLatinMap } from './maps';

// Convert Latin text to Cyrillic
export function latinToCyrillic(text: string): string {
  if (!text) return '';
  
  let result = '';
  let i = 0;
  
  while (i < text.length) {
    let matched = false;
    
    // Try longer substrings first
    for (let len = 4; len >= 1; len--) {
      const substr = text.substring(i, i + len).toLowerCase();
      if (latinToCyrillicMap[substr]) {
        result += latinToCyrillicMap[substr];
        i += len;
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      result += text[i];
      i++;
    }
  }
  
  return result;
}

// Convert Cyrillic text to Latin
export function cyrillicToLatin(text: string): string {
  if (!text) return '';
  
  let result = '';
  let i = 0;
  
  while (i < text.length) {
    let matched = false;
    
    // Check 2-char combos first
    for (let len = 2; len >= 1; len--) {
      const substr = text.substring(i, i + len);
      if (cyrillicToLatinMap[substr]) {
        result += cyrillicToLatinMap[substr];
        i += len;
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      result += text[i];
      i++;
    }
  }
  
  return result;
}
