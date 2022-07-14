// @ts-nocheck
import React, {useState} from 'react';
import {mediaDevices, RTCView} from 'react-native-webrtc';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const WebRTC = () => {
  const [stream, setStream] = useState(null);

  const start = async () => {
    console.log('start');
    if (!stream) {
      let s;
      try {
        s = await mediaDevices.getUserMedia({video: true});
        setStream(s);
      } catch (e) {
        console.error(e);
      }
    }
  };
  const stop = () => {
    console.log('stop');
    if (stream) {
      stream.release();
      setStream(null);
    }
  };

  // <RTCView
  //   mirror={true}
  //   objectFit={'cover'}
  //   streamURL={'wss://janus.conf.meetecho.com:8188/janus'}
  //   zOrder={0}
  //   style={{flex: 1, backgroundColor: 'black'}}
  // />
  return (
    <View style={styles.body}>
      {stream && (
        <RTCView
          streamURL={'wss://janus.conf.meetecho.com/ws'}
          style={styles.stream}
        />
      )}
      <View style={styles.footer}>
        <Pressable title="Start" onPress={start}>
          <Text>start</Text>
        </Pressable>
        <Pressable title="Stop" onPress={stop}>
          <Text>stop</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    ...StyleSheet.absoluteFill,
  },
  stream: {
    flex: 1,
  },
  footer: {
    backgroundColor: Colors.lighter,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default WebRTC;
