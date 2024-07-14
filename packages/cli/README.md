# @bio-js/cli

The official CLI for scaffolding Bio-Js projects.

## Installation

You can install the CLI globally using npm:

```bash
npm install -g @bio-js/cli
```

Or use it directly with npx:

```bash
npx @bio-js/cli my-project
```

## Usage

To create a new Bio-Js project, run:

```bash
bio-js my-project
```

Or if you're using npx:

```bash
npx @bio-js/cli my-project
```

This will create a new directory with the name 'my-project' and scaffold a basic Bio-Js application inside it.

## Options

- `--typescript`: Initialize the project with TypeScript support (default: true)
- `--no-typescript`: Initialize the project without TypeScript
- `--git`: Initialize a git repository (default: true)
- `--no-git`: Don't initialize a git repository
- `-h, --help`: Display help for command

## Project Structure

The scaffolded project will have the following structure:

```
my-project/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License.
