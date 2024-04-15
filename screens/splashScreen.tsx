import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const SplashScreen: React.FC<{ onDismiss: () => void }> = ({ onDismiss }) => {
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start(() => {
      setTimeout(() => {
        onDismiss(); // Call onDismiss to hide the splash screen
      }, 2000); // Set the duration for which the splash screen is visible
    });
  }, [fadeAnim, onDismiss]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadeContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.text}>Elevate</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60495A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:'#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
