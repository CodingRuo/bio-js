#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

program
  .version('0.1.0')
  .argument('<project-name>', 'Name of the project')
  .option('--typescript', 'Initialize the project with TypeScript support', true)
  .option('--no-typescript', 'Initialize the project without TypeScript')
  .option('--git', 'Initialize a git repository', true)
  .option('--no-git', 'Don\'t initialize a git repository')
  .parse(process.argv);

const options = program.opts();
const projectName = program.args[0];

async function main() {
  if (!projectName) {
    console.error('Please specify the project name');
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.error(`The directory ${projectName} already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(projectPath);
  fs.mkdirSync(path.join(projectPath, 'src'));

  // Create package.json
  const packageJson = {
    name: projectName,
    version: '0.1.0',
    description: 'A Bio-Js project',
    main: options.typescript ? 'dist/index.js' : 'src/index.js',
    scripts: {
      start: options.typescript ? 'tsx src/index.ts' : 'node src/index.js',
      build: options.typescript ? 'tsc' : 'echo "No build step"',
    },
    dependencies: {
      'bio-js': '^0.1.0',
    },
    devDependencies: options.typescript ? {
      typescript: '^4.5.4',
      tsx: '^3.12.7',
      '@types/node': '^14.14.31',
    } : {},
  };

  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Create main file
  const mainFileContent = `import bioJs from 'bio-js';

const app = bioJs();

app.get('/', (req, res) => {
  res.send('Hello from Bio-Js!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
`;

  fs.writeFileSync(
    path.join(projectPath, 'src', options.typescript ? 'index.ts' : 'index.js'),
    mainFileContent
  );

  // Create tsconfig.json if TypeScript is enabled
  if (options.typescript) {
    const tsconfigJson = {
      compilerOptions: {
        target: 'ES2018',
        module: 'CommonJS',
        outDir: './dist',
        rootDir: './src',
        strict: true,
        esModuleInterop: true,
      },
      include: ['src/**/*'],
      exclude: ['node_modules'],
    };

    fs.writeFileSync(
      path.join(projectPath, 'tsconfig.json'),
      JSON.stringify(tsconfigJson, null, 2)
    );
  }

  // Create README.md
  const readmeContent = `# ${projectName}

This is a Bio-Js project.

## Getting Started

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`
   npm start
   \`\`\`

3. Open http://localhost:3000 in your browser.

## Scripts

- \`npm start\`: Start the development server
- \`npm run build\`: Build the project${options.typescript ? ' (TypeScript compilation)' : ''}
`;

  fs.writeFileSync(path.join(projectPath, 'README.md'), readmeContent);

  // Initialize git repository if requested
  if (options.git) {
    try {
      execSync('git init', { cwd: projectPath });
      fs.writeFileSync(path.join(projectPath, '.gitignore'), 'node_modules\ndist\n');
      console.log('Initialized a git repository.');
    } catch (error) {
      console.error('Failed to initialize a git repository:', error);
    }
  }

  console.log(`Project ${projectName} created successfully!`);
  console.log('To get started, run:');
  console.log(`  cd ${projectName}`);
  console.log('  npm install');
  console.log('  npm start');
}

main().catch(console.error);