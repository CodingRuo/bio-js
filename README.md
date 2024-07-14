# Bio-Js Monorepo

This is the development monorepo for Bio-Js, a modular backend framework for Node.js. This README is intended for contributors and developers working on the Bio-Js framework itself.

## Repository Structure

- `packages/bio-js`: Core Bio-Js package
- `packages/router`: Router package
- `packages/middleware`: Middleware package
- `packages/create-bio-js`: CLI tool for scaffolding Bio-Js projects

## Getting Started for Contributors

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CodingRuo/bio-js.git
   cd bio-js
   ```

2. **Install dependencies:**
   We use pnpm for package management. If you don't have pnpm installed, you can install it with:
   ```bash
   npm install -g pnpm
   ```
   Then, install the project dependencies:
   ```bash
   pnpm install
   ```

3. **Build all packages:**
   ```bash
   pnpm build
   ```

4. **Run tests:**
   ```bash
   pnpm test
   ```

## Development Workflow

We use [Changesets](https://github.com/changesets/changesets) for version management and package publishing.

1. Make your changes in the relevant package(s).
2. Add a changeset:
   ```bash
   pnpm changeset
   ```
3. Commit your changes and the changeset.
4. Push your changes and create a pull request.

## Publishing (for maintainers)

1. Merge changesets:
   ```bash
   pnpm changeset version
   ```
2. Commit the version updates.
3. Publish packages:
   ```bash
   pnpm release
   ```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License.
