# MouseDining Frontend

Standalone web frontend built with the Nuxt framework ([documentation](https://nuxt.com/docs/getting-started/introduction)) that uses the Vue library ([docs](https://vuejs.org/guide/introduction.html)).

## Setup

**Pre-requisites**

```
npm - any version
node@18.16.0
```

**NOTE:** Its important to use the correct version of node during installation, developement and build. If you need different node versions for different applications, it is highly recommended to use [nvm](https://github.com/nvm-sh/nvm) to manage them.

Additionally, code is linted and formatted with ESLint and Prettier. It is strongly encouraged to install those extensions in your editor to take advantage of code formatting on save. Finally, the Volar extension will greatly assist with Vue development.

Clone repo:

```bash
$ git clone https://github.com/mousdining/mousedining-web.git

$ cd mousedining-web

// Install packages
$ npm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
