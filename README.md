# Starter

A [Nuxt.js](https://github.com/nuxt/nuxt.js) starter project template to set it up with [Lumen CMS](https://github.com/lumen-cms/lumen-cms).

## Prerequisites

Make sure to have `node 8.0+` and `npm 5.0+` installed

## Before Installation

### Set up backend
* Head over to [Lumen CMS](https://github.com/lumen-cms/lumen-graphcool)
* Follow all steps to set up your graph.cool backen
* Prepare PROJECT_ID

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli) v2 (not v3)

``` bash
$ vue init lumen-cms/starter-template my-project
# you will be prompted the Project ID and subscription-endpoint of your backend
$ cd my-project                     
# install dependencies
$ npm install # Or yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (`vue -V`).

### Add your endpoint in case you haven't pasted it in the installation prompt
```js
// nuxt.config.js
env:{
  GRAPHQL_PROJECT_ID: 'GRAPH_COOL_PROJECT_ID', // change this
},
'lumen-cms':{
   apollo: {
        clientConfigs: {
          default: {
            httpEndpoint: 'https://api.graph.cool/simple/v1/GRAPH_COOL_PROJECT_ID', // change your data here
            wsEndpoint: null
          }
        }
      }
}
```


## Usage

### Development

``` bash
# serve with hot reloading at localhost:3000
$ npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

``` bash
# build for production and launch the server
$ npm run build
$ npm start
```

### Generate

``` bash
# generate a static project
$ npm run generate
```
