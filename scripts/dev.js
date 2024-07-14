const { execSync } = require('child_process');
const { watch } = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, '..', 'packages');

function buildAll() {
  console.log('Building all packages...');
  execSync('pnpm run build', { stdio: 'inherit' });
  console.log('Build complete.');
}

watch(packagesDir, { recursive: true }, (eventType, filename) => {
  if (filename.endsWith('.ts')) {
    console.log(`File ${filename} has been changed. Rebuilding...`);
    buildAll();
  }
});

console.log('Watching for changes in packages directory...');
buildAll();
