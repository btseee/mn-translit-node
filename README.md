# mn-translit

Mongolian Latin ↔ Cyrillic transcription (MNS 5217:2012) with number-to-text conversion.

## Install

```bash
npm install mn-translit
```

## Node.js Compatibility

**Minimum Requirements:** Node.js ≥14.0.0, npm ≥6.0.0

**Tested & Supported Versions:**
- ✅ Node.js 14.x (LTS Fermium) - Minimum supported
- ✅ Node.js 16.x (LTS Gallium)
- ✅ Node.js 18.x (LTS Hydrogen)
- ✅ Node.js 20.x (LTS Iron)
- ✅ Node.js 22.x (Current)

**Platform Support:**
- ✅ Ubuntu / Linux
- ✅ Windows
- ✅ macOS (Intel & Apple Silicon)

All versions are automatically tested in CI across all platforms. The package uses ES2015 (ES6) as the compilation target for maximum compatibility with older Node.js versions while maintaining modern JavaScript features.

## Usage

```javascript
const { latinToCyrillic, cyrillicToLatin, numberToMongolian } = require('mn-translit');

latinToCyrillic('sain baina uu');  // сайн байна уу
cyrillicToLatin('монгол');         // mongol
numberToMongolian(1000);           // мянга
```

**TypeScript:**

```typescript
import { latinToCyrillic, cyrillicToLatin, numberToMongolian } from 'mn-translit';
```

**ES Modules:**

```javascript
import { latinToCyrillic, cyrillicToLatin, numberToMongolian } from 'mn-translit';
```

## Examples

```javascript
// Special vowel cases
latinToCyrillic('ai');  // ай
latinToCyrillic('ei');  // эй

// Numbers
numberToMongolian(21);   // хорин нэг
numberToMongolian(111);  // зуун арван нэг
numberToMongolian(1000000);  // сая
```

## Runtime Compatibility Utilities

The package includes utilities to check Node.js version compatibility at runtime:

```javascript
const { validateEnvironment, getNodeVersion, checkMinimumNodeVersion } = require('mn-translit');

// Check if running in a supported environment
const { supported, warnings } = validateEnvironment();
if (!supported) {
  console.warn('Unsupported Node.js version:', warnings);
}

// Get current Node.js version
const version = getNodeVersion();
console.log(`Running on Node.js ${version.major}.${version.minor}.${version.patch}`);

// Check for specific version requirements
if (checkMinimumNodeVersion(16)) {
  // Use Node 16+ features
}
```

## API Reference

### Transliteration Functions

- `latinToCyrillic(text: string): string` - Convert Latin text to Cyrillic
- `cyrillicToLatin(text: string): string` - Convert Cyrillic text to Latin

### Number Conversion

- `numberToMongolian(num: number): string` - Convert number to Mongolian text

### Character Maps

- `latinToCyrillicMap` - Mapping of Latin to Cyrillic characters
- `cyrillicToLatinMap` - Mapping of Cyrillic to Latin characters

### Runtime Compatibility

- `getNodeVersion()` - Get current Node.js version
- `checkMinimumNodeVersion(major, minor?)` - Check if Node version meets requirements
- `validateEnvironment()` - Validate runtime environment
- `replaceAll(str, search, replace)` - Polyfill for String.replaceAll (Node 15+)
- `hasOwn(obj, prop)` - Polyfill for Object.hasOwn (Node 16.9+)

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Clean build artifacts
npm run clean
```

## Contributing

Contributions are welcome! Please ensure:

1. Code works on Node.js 14+
2. Tests pass on all supported versions
3. TypeScript compiles without errors
4. Follow existing code style

## License

MIT
