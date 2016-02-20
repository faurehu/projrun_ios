#### Project Run iOS Client

##### Technologies:
* React Native -
* Redux
* Jest

##### Instructions:

Clone the repo and call:

```shell
npm install
```

Open `node_modules/react_native/jest/env.js` and remove the last line:

`jest.mock('ErrorUtils', require('ErrorUtils'));`

Make sure the tests run by executing jest

```shell
npm test
```

Start the packager and simulator by calling the following line:

```shell
react-native run-ios
```
