# Connect with API

__Note__: This repo is on a very early stage and is not bootstrapped correctly yet.

[![MIT](https://img.shields.io/github/license/LukaszNowakPL/connect-with-api)](https://github.com/LukaszNowakPL/connect-with-api/blob/master/LICENSE)
[![Version](https://img.shields.io/github/package-json/v/LukaszNowakPL/connect-with-api)](https://github.com/LukaszNowakPL/connect-with-api/blob/master/package.json)
[![Build Status](https://travis-ci.org/LukaszNowakPL/connect-with-api.svg?branch=master)](https://travis-ci.org/LukaszNowakPL/connect-with-api)
[![dependencies Status](https://david-dm.org/LukaszNowakPL/connect-with-api/status.svg)](https://david-dm.org/LukaszNowakPL/connect-with-api)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/c2f88c797b80405cb88f/maintainability)](https://codeclimate.com/github/LukaszNowakPL/connect-with-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c2f88c797b80405cb88f/test_coverage)](https://codeclimate.com/github/LukaszNowakPL/connect-with-api/test_coverage)

Connect with API is a presentation of good practices of how to create modern React application which connects with an Api.

This presentation covers:
- Component > Custom Hook > Api pattern to handle fetch calls with two different Apis
- Communication is made using `Axios`
- Using `React hooks`
- Written in `TypeScript`
- Tested using `Jest` and `testing-library`

## Architecture motivation

### Custom hooks

To handle communication with Api and supporting tasks we use React custom hook. The hook is responsible for making an Api call, storing and passing down call's results as well as basic flags `isFetching` and `isError` in case of any error.

Each custom hook handles only one endpoint action: `usePokemonDetails` for fetching details of chosen pokemon and `usePokemonList` for fetching list of available pokemon. Endpoints are separated on different folders: `dogs` and `pokemon`. 

### Api layer

The api layer is responsible for direct endpoint calls made by chosen library `Axios`. Apis are separated on different folders: `dogsApi` and `pokemonApi`.

This layer also contains Dtos of Api results.

### Components

The Api communication is completely transparent for components. They just import fetched data, flags and callbacks to trigger Api calls from custom hooks.

## Testing motivation

__Note__: For this codebase purpose _integration test_ means all tests that renders React component.

The codebase contains two layers of testing  - unit tests and integration tests. Tests are performing using `Jest` and `testing-library`.

Integration tests should cover as wide area of integration as possible. It means if component performs an endpoint communication, we use the codebase all the way down to Api functions which are then mocked. Api functions are unit-tested exclusively.

This approach makes integration tests transparent to changes on communication-handling libraries. If we decide to switch from `Axios` to something else only Api part of unit tests will be affected.

Tests helpers provide api mocks. This data may be use for unit testing custom hooks made to handle Api calls as well as integration testing of components.

### Test examples

Both Apis are covered by test examples. The `pokemonApi` uses reusable mocks stored on `_helpers` folder, `dogsApi` uses hardcoded ones.

There is one pure-logic test example - for `useDogsList.helpers`. It uses `describe('name of file') > describe('name of function') > it('tests one scenario')` pattern.

The `useDogList` hook test uses hardcoded results of mocked api functions. The test should check all return values across hook's life-time as well as triggering api functions it consume.

There are integration tests for two components. The `PokemonList.test` covers testing of component which communicates with endpoint. It consumes `usePokemonList` hook and mock `pokemonApi` using reusable mock values stored on `_helpers` folder. It covers several cases of how should component behave with different endpoint communication scenarios. The `Header.test` covers pure integration with a parent component (passing callback function) as well as nested components (consuming and triggering mentioned callback).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Other used technologies sources:
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [Jest](https://jestjs.io/docs/en/getting-started.html)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro)
- [Emotion](https://emotion.sh/docs/introduction)
- [Chakra-ui](https://chakra-ui.com/getting-started)
- [Axios](https://github.com/axios/axios)