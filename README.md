#### Project Run iOS Client [![Build Status](https://www.bitrise.io/app/f37f7660c284ec3a.svg?token=KYs8nW6vMXqRHUcTFcg8rA&branch=redux)](https://www.bitrise.io/app/f37f7660c284ec3a)

This app will be used in the Royal Brompton Hospital tours for medical students
learning about the equipment and their functions. The goal is to provide
context to the tours.

##### Technologies:
* React Native - Bridge for porting JSX views into iOS
* Redux - Framework for managing the state of the application
* Socket.io - For handling the tour session
* Jest - Test suite

##### Instructions:

Clone the repo and call:

```shell
npm install npm3 && npm3 install
```

Make sure the tests run by executing jest

```shell
npm test
```

Start the packager and simulator by opening `ios/projrun_ios.xcodeproj/project.pbxproj`
on XCode and running the project.

If you get an error about not being able to evaluate `navigator.userAgent.match`
open the debugger by pressing `cmd + D`

You can also debug by pressing `^ + cmd + z` to open the Chrome Developer tools.
