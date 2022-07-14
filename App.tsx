import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

import App1 from './src/app1';

const App = () => {
  const [app, setApp] = useState(0);

  if (app === 0) {
    return (
      <View style={styles.root}>
        <Pressable onPress={() => setApp(1)} style={styles.pressable}>
          <Text>App1</Text>
        </Pressable>
        <Pressable onPress={() => setApp(2)} style={styles.pressable}>
          <Text>App2</Text>
        </Pressable>
      </View>
    );
  }

  return app === 1 ? <App1 /> : <App1 />;
};

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  pressable: {padding: 20},
});

export default App;
