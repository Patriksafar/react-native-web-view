import * as React from 'react';
import { WebView } from 'react-native-webview';

import { View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <WebView
      source={{ uri: 'https://www.twisto.cz' }}
      style={{ marginTop: 20 }}
      nativeConfig={{ props: { wwebContentsDebuggingEnabled: true } }}
    />
  );
}
