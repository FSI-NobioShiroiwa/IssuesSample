import React, { useCallback, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BackHandler, HWEvent, StyleSheet, useTVEventHandler } from 'react-native';
import { scale } from 'react-native-size-matters';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MenuDetectScreen() {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      console.log(`Menu button pressed in menudetect screen`);
      return true; // prevent default behavior
    });
    return () => backHandler.remove();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicons
          size={scale(200)}
          name="code-slash"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Menu Detect Screen</ThemedText>
      </ThemedView>
      <ThemedText>Screen for menu presses detection.</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: scale(-30),
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: scale(8),
  },
  button: {
    backgroundColor: 'darkblue',
    margin: scale(5),
    borderRadius: scale(2),
    padding: scale(5),
  },
  buttonText: {
    color: 'white',
    fontSize: scale(8),
  },
});
