// LoginScreen.tsx
import React from 'react';
import { View, Text, StyleSheet,TextInput,Button,Input} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login</Text>
        <Text style={{ color: '#888', marginTop: 4 }}>Enter your email below to login to your account</Text>
      </View>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ marginBottom: 4 }}>Email</Text>
        <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }} placeholder="m@example.com" keyboardType="email-address" autoCapitalize="none" autoCompleteType="email" />
      </View>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ marginBottom: 4 }}>Password</Text>
        <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }} placeholder="Password" secureTextEntry={true} />
      </View>
      <Button title="Login" onPress={() => {/* Handle login */}} />
      <Button title="Login with GitHub" onPress={() => {/* Handle GitHub login */}} />
      <Text style={{ marginTop: 12, textAlign: 'center', textDecorationLine: 'underline', color: 'blue' }}>Forgot your password?</Text>
    </View>
  </View>
)}

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 4,
    },
    icon: {
      width: 20,
      height: 20,
      color: '#333',
    },
    formContainer: {
      maxWidth: '80%',
      alignSelf: 'center',
    },
  };

export default LoginScreen;
