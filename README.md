# mn-translit

Mongolian Latin ↔ Cyrillic transcription (MNS 5217:2012) with number-to-text conversion.

## Install

```bash
npm install mn-translit
```

**Requirements:** Node.js ≥12.0.0, npm ≥6.0.0

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

## License

MIT
