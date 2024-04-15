

import React, { useState } from 'react';
import { View} from 'react-native';
import SplashScreen from './screens/splashScreen'; // Import SplashScreen component
import MainScreen from './screens/mainScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const dismissSplash = () => {
    setShowSplash(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {showSplash ? (
        <SplashScreen onDismiss={dismissSplash} />
      ) : (
        <MainScreen/>
      )}
    </View>
  );
};

export default App;
