// Avatar.tsx
import React from 'react';
import { Image, Text,StyleSheet } from 'react-native';
// import avatarImage from '../assets/images/avatar.png';

const Avatar = () => {
  return (
    <Text>
        Avatar
    </Text>
    // <Image source={} style={styles.avatar} />
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default Avatar;
