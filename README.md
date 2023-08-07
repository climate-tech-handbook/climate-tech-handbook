# Disclaimer: This project is a work in progress!

---

# Climate Tech Handbook - Docusaurus build

This project is the Docusaurus build of the Climate Tech Handbook, a comprehensive resource that aims to provide valuable insights, knowledge, and tools to navigate the complex landscape of climate technology.

The Climate Tech Handbook serves as a central hub for information related to climate tech, covering various topics such as renewable energy, sustainable agriculture, carbon capture, climate finance, and more. It is designed to support researchers, entrepreneurs, policymakers, and individuals passionate about driving positive climate impact.

The current test build can be accessed at [docusaurus.climatetechhandbook.com](https://docusaurus.climatetechhandbook.com) (Password: test).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Local Development](#local-development)
- [Build](#build)
- [Content Management with Decap CMS](#content-management-with-decap-cms)
- [Deployment with Netlify](#deployment-with-netlify)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) version >= 12.13.0 or above (which can be checked by running `node -v`). You can use `nvm` for managing multiple Node versions on a single machine installed
- [npm](https://www.npmjs.com/get-npm) version >= 6.12.0 or above (which can be checked by running `npm -v`)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/climate-tech-handbook/docusaurus-test.git
```

2. Change to the directory:

```bash
cd docusaurus-test
```

3. Install the dependencies:

```bash
npm install
```

## Local Development

Start the development server:

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

To create a static build of the project:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Content Management with Decap CMS

This project uses Decap CMS for content management. For instructions on how to use Decap CMS with this project, please refer to [Decap CMS documentation](https://www.decapcms.com/docs).

## Deployment with Netlify

This project is deployed with Netlify. For instructions on how to deploy this project with Netlify, please refer to [Netlify documentation](https://docs.netlify.com/).

## Contributing

We welcome contributions to the Climate Tech Handbook. Please see our [Contributing Guide](./CONTRIBUTING.md) for more information.

## Acknowledgements

This project represents an ongoing effort to transition the Climate Tech Handbook from its original form, built with MKDocs, to a new build powered by Docusaurus 2. The initial version of the handbook can be found at [this repository](https://github.com/climate-tech-handbook).

In the course of this transition, we are not only changing the static site generator but also integrating our backend, which was initially built as a separate Flask application in the [data-magic](https://github.com/climate-tech-handbook/data-magic) repository. Our goal is to streamline development and maintenance by consolidating these resources into a single, cohesive monorepo.

We are grateful to all contributors who have participated in this project. Your time and expertise are greatly appreciated. We are always open to new contributors and look forward to the continued growth and improvement of the Climate Tech Handbook.

## Contact

For any queries, suggestions, or contributions, please reach out to us:

- [LinkedIn](https://www.linkedin.com/company/climate-tech-handbook/)
- [Climate Tech Handbook Slack](https://chat.climatetechhandbook.com)
- [Climate Tech Handbook](https://www.climatetechhandbook.com/)

## License

This project is licensed under the terms of the MIT license.

```License
The MIT License (MIT)

Copyright (c) <2023> Climate Tech Handbook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
