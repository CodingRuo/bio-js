#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

program
  .version('0.1.0')
  .argument('[project-name]', 'Name of the project')
  .action(async (projectName) => {
    if (!projectName) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is the name of your project?',
          default: 'my-bio-js-app'
        }
      ]);
      projectName = answers.projectName;
    }

    console.log(`Creating a new Bio-Js project: ${projectName}`);
    
    // Create project directory
    fs.mkdirSync(projectName);

    // Create package.json
    const packageJson = {
      name: projectName,
      version: '0.1.0',
      dependencies: {
        'bio-js': '^0.1.0'
      },
      scripts: {
        start: 'node index.js'
      }
    };
    fs.writeFileSync(
      path.join(projectName, 'package.json'),
      JSON.stringify(packageJson, null, 2)
    );

    // Create a simple index.js
    const indexContent = `
const bioJs = require('bio-js');

// Your Bio-Js app code here
console.log('Hello from Bio-Js!');
`;
    fs.writeFileSync(path.join(projectName, 'index.js'), indexContent.trim());

    console.log('Project created successfully!');
    console.log('To get started, run:');
    console.log(`  cd ${projectName}`);
    console.log('  npm install');
    console.log('  npm start');
  });

program.parse(process.argv);
