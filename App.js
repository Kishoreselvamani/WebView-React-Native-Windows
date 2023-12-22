import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render() {
    try {
      // const HTML = require('./compoent/hello.html');
      return (
        <View style={{flex: 1}}>
          <WebView
            originWhitelist={['*']}
            source={{
              uri: 'file:///D:/WebSample/compoent/file.html',
            }}
          />
        </View>
      );
    } catch (err) {
      console.log('error in the console');
    }
  }
}

// import {View, Text} from 'react-native';
// import React from 'react';
// import Form from './compoent/Form';

// export default function App() {
//   return (
//     <View>
//       <Form />
//     </View>
//   );
// }
