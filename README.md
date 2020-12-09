# react-native-web-view

## Enviroment setup

Just follow instruction in this document:
https://reactnative.dev/docs/environment-setup

1. Start/turn on your virtual mobile device

2. Start application:

Just write down this command: `yarn start`
This will start react native part

In new tab you need to run this command to compile it for android: `yarn android`

Issues:
If your android build fail, you will probably need this change on your mac device:

Modify your `./bash_profile` by `open ~/.bash_profile` and write down this:

```
export ANDROID_HOME=/Users/YOURNAME/Library/Android/sdk
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
```
