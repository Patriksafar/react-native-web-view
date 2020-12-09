# Webview Application debugger

This application opens native Safari WebView (on iOS) or Chrome WebView (on Android devices) with available devTools for WebView. Default startpoint is set to `www.twisto.cz`.

This app's written in React Native and can be modified for any other testing or debugging purposes.

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

## WebView DevTools

As soon as you run your application in mobile device go to remote devices in Chrome Web browser:

`Chrome -> DevTools -> Options -> More tools -> Remote devices`

or just go to: `chrome://inspect/#devices`

Then you should see list of connected remote devices. If you are using Android Studio you should see device with name similar to: `sdk_gphone_x86_arm #EMULATOR-5554` or name of your mobile if you have physical device connected in debug mode via USB.

For this devices there should be `WebView in host.exp.exponent` in list with `inspect` and `pause` buttons.

Click `inspect` to open dev tools for application webview
