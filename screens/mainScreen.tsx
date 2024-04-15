// MainScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '../components/avatar';
import MenuButton from '../components/menuButton';
import LoginScreen from './loginScreen';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <LoginScreen/>
      {/* <Text style={styles.title}>Main Screen</Text>
      <Avatar />
      <View style={styles.container}>
      <Text>Main Menu</Text>
      <MenuButton title="Settings" onPress={() => console.log('Settings pressed')} />
      <MenuButton title="Profile" onPress={() => console.log('Profile pressed')} /> */}
      {/* Add more menu items as needed */}
    </View>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MainScreen;
