# canicompost

An app using dumber bundler to build. More details in `tasks/*.js` (loaded by `gulpfile.js`).

## Run in dev mode, plus watch

    npm start

## Run in production mode, plus watch

It updates index.html with hashed file name.

    npm run start:prod

## Build in dev mode

Generates `dist/*-bundle.js`

    npm run build:dev

## Build in production mode

Generates `dist/*-bundle.[hash].js`, update index.html with hashed file name.

    npm run build

## To clear cache

Clear tracing cache. In rare situation, you might need to run clear-cache after upgrading to new version of dumber bundler.

    npm run clear-cache

## Nodejs test

    npm test

Details in package.json -> scripts -> pretest & test.

## Code coverage

`npm test` already generetes code coverage report, you can open `coverage/lcov-report/index.html` for detailed report.

  git config --global user.email "me@williamthom.as"
