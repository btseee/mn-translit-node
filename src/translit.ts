import { latinToCyrillicMap, cyrillicToLatinMap } from './maps';

export interface TransliterationOptions {
  preserveCase?: boolean;
}

// Precompute the maximum sequence lengths to avoid hard-coding and future-proof the maps
const MAX_LATIN_SEQ_LEN = Object.keys(latinToCyrillicMap).reduce((m, k) => Math.max(m, [...k].length), 1);
const MAX_CYRILLIC_SEQ_LEN = Object.keys(cyrillicToLatinMap).reduce((m, k) => Math.max(m, [...k].length), 1);

function applyCase(mapped: string, original: string): string {
  if (!original) return mapped;

  if (original === original.toUpperCase() && original !== original.toLowerCase()) {
    return mapped.toUpperCase();
  }

  const first = original[0];

  if (first === first.toUpperCase() && first !== first.toLowerCase()) {
    const [firstChar, ...rest] = [...mapped];
    return (firstChar ? firstChar.toUpperCase() : '') + rest.join('');
  }
  
  return mapped;
}

// Convert Latin text to Cyrillic
export function latinToCyrillic(text: string, options: TransliterationOptions = {}): string {
  if (!text) return '';

  const { preserveCase = false } = options;
  let result = '';
  let i = 0;

  while (i < text.length) {
    let matched = false;

    // Try longer substrings first
    for (let len = MAX_LATIN_SEQ_LEN; len >= 1; len--) {
      const raw = text.substring(i, i + len);
      const key = raw.toLowerCase();
      const mapped = latinToCyrillicMap[key];
      if (mapped) {
        result += preserveCase ? applyCase(mapped, raw) : mapped;
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
export function cyrillicToLatin(text: string, options: TransliterationOptions = {}): string {
  if (!text) return '';

  const { preserveCase = false } = options;
  let result = '';
  let i = 0;

  while (i < text.length) {
    let matched = false;

    // Try longer substrings first
    for (let len = MAX_CYRILLIC_SEQ_LEN; len >= 1; len--) {
      const raw = text.substring(i, i + len);
      // First try exact match, then case-insensitive match for uppercase Cyrillic letters
      let mapped = cyrillicToLatinMap[raw];
      if (!mapped) {
        const key = raw.toLowerCase();
        mapped = cyrillicToLatinMap[key];
      }
      if (mapped) {
        result += preserveCase ? applyCase(mapped, raw) : mapped;
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
