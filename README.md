# express-ts-starter

A simple expressjs starter project with TypeScript

## TODO

- [ ] Config for testing
- [x] Scripts for dev
- [ ] Scripts for testing
- [ ] Scripts for build
- [ ] Basic express project structure
- [ ] Sample API
- [ ] Better README
- [ ] Better selection of starter deps (ie, maybe remove nodemon, etc...)

## NOTE

Solutions in case of alias paths

1. ts-node with tsconfig-paths  

Add the following to tsconfig.json

```json
  "ts-node": {
    "transpileOnly": true,
    "require": ["tsconfig-paths/register"]
  }
```

2. tsc with tsc-alias