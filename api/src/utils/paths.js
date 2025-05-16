import path from 'path';
import process from 'process';
import fs from 'fs';

/**
 * Returns an absolute path from the project root, and ensures the directory exists.
 * Example: getProjectPath('logs', 'access.log')
 */
export function getProjectPath(...segments) {
  const fullPath = path.join(process.cwd(), ...segments);

  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return fullPath;
}
