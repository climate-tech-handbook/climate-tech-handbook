# The Climate Tech Handbook

[![Climate Tech Handbook - logo - small - full color](https://user-images.githubusercontent.com/1459051/233495668-13a7bc63-28b2-444f-8827-765edb7bc0e8.png)](https://climatetechhandbook.com)

## Our Mission:

To help job seekers transition to the climate tech field as quickly as possible.

## Contribute:

Please [join us on Slack](https://chat.climatetechhandbook.com) and we can talk about the best ways you can help out.

**We need:**

- Content writers
- Data analysts
- Designers
- Financial contribuors
- Business advisors for financial sustainability
- People who love making cool things with data

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
git clone https://github.com/climate-tech-handbook/climate-tech-handbook.git
```

2. Change to the directory:

```bash
cd climate-tech-handbook
```

3. Install Node

On a Mac, complete the following steps
- Install Homebrew package manager
- Install Node Version Manager (nvm)
- Install Node Package Manager (npm)

5. Install the dependencies:

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
