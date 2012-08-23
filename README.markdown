[![build status](https://secure.travis-ci.org/Enome/earls.png)](http://travis-ci.org/Enome/earls)
# Earls

## Tiny url library

``` js
var earls = require('earls')();

earls.map({
  'products': '/products',
  'products_show': '/products/show/:id'
});

earls.url('products_show', { id: 99 } ); //returns '/products/show/99'
```

## Installation

``` shell
npm install earls
```

There is also a earl library in npm so make sure you don't forget the s at the end.

## Map

Map will just extend the internal url list (object) with the one you pass it.

``` js
earls.map({
  'products': '/products',
  'products_show': '/products/show/:id'
});
```

### Note

You can use map multiple times. It will extend the internal list of urls and not overwrite it.

## Register

Mostly map will be enough but incase you like fancy mappings you can register your own mapping method. The method just has to return the same structure as the the default mapping.

``` js
earls.register('custom', functionMapper);
earl.custom({}); //Use whatever custom mapping your mapper expects.
```

A custom mapper that uses functions and works well with Coffee-Script can be found on: [earls-function-mapper](https://github.com/Enome/earls-function-mapper).

## Run tests

Tests use mocha and should.

``` shell
make test
```
