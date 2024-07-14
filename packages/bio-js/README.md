# Bio-Js

![npm](https://img.shields.io/npm/v/bio-js)
![npm bundle size](https://img.shields.io/bundlephobia/min/bio-js)
![npm](https://img.shields.io/npm/dm/bio-js)
![GitHub](https://img.shields.io/github/license/CodingRuo/bio-js)

Bio-Js is a modular backend framework for Node.js, designed to provide a flexible and efficient solution for building server-side applications.

## Features

- Modular architecture
- TypeScript support
- Efficient routing
- Middleware system
- Customizable and extensible

## Getting Started

To start a new Bio-Js project, you can use our CLI tool:

```bash
npx create-bio-js my-bio-js-app
cd my-bio-js-app
npm install
npm start
```

Or, to add Bio-Js to an existing project:

```bash
npm install bio-js
```

## Basic Usage

Here's a simple example of how to use Bio-Js:

```javascript
const bioJs = require('bio-js');

const app = bioJs();

app.get('/', (req, res) => {
  res.send('Hello, Bio-Js!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

## Documentation

For full documentation, please visit our [official documentation site](https://bio-js.dev).

## Contributing

We welcome contributions! If you'd like to contribute to Bio-Js, please check out our [GitHub repository](https://github.com/CodingRuo/bio-js) for more information.

## License

This project is licensed under the MIT License.
