declare const process: { version: string };

export function getNodeVersion(): { major: number; minor: number; patch: number } {
  const version = process.version.slice(1);
  const [major, minor, patch] = version.split('.').map(Number);
  return { major, minor, patch };
}

export function checkMinimumNodeVersion(minMajor: number, minMinor: number = 0): boolean {
  const { major, minor } = getNodeVersion();
  return major > minMajor || (major === minMajor && minor >= minMinor);
}

export function replaceAll(str: string, search: string, replace: string): string {
  if (typeof (String.prototype as any).replaceAll === 'function') {
    return (str as any).replaceAll(search, replace);
  }
  return str.split(search).join(replace);
}

export function hasOwn(obj: object, prop: string): boolean {
  if (typeof (Object as any).hasOwn === 'function') {
    return (Object as any).hasOwn(obj, prop);
  }
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function validateEnvironment(): { supported: boolean; warnings: string[] } {
  const warnings: string[] = [];
  const { major, minor } = getNodeVersion();
  
  if (major < 14) {
    warnings.push(
      `Node.js ${major}.${minor} is below the minimum supported version (14.0.0). ` +
      'Some features may not work correctly.'
    );
  }
  
  return {
    supported: major >= 14,
    warnings
  };
}
