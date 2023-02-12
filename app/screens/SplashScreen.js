import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash_ic.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Prada Calc</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
