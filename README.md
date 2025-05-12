# node-express-template

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white)

A starter template for building a server with Express. This template was originally made for building REST APIs for projects using [MERN stack](https://www.mongodb.com/en-us/resources/languages/mern-stack#:~:text=MERN%20is%20one%20of%20several,any%20front%2Dend%20JavaScript%20framework.). 

## Features

- TypeScript
- ESLint for linting
- Nodemon for server live reload
- Express, Express-session, Express-async handler
- Passport for authentication
- supertest for testing

## Installation

Clone the repository:

```bash
git clone git@github.com:creme332/node-express-template.git
```

Navigate to the project directory and install dependencies:

```bash
cd node-express-template
npm install
```

## Usage

To run server in development mode:

```bash
npm run dev
```

Server is deployed at `localhost:3000`.

To generate production build of the server:

```bash
npm run build
```

## To-do

- [ ] Install cors
- [ ] install express-validator
- [ ] install mocha
- [ ] Add script for tests

## References

- https://www.youtube.com/watch?v=qy8PxD3alWw&ab_channel=ColtSteele
- https://github.com/greenroach/express-ts-template
