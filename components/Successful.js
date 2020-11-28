import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

const Successful = () => {
  return (
    <View style={styles.container}>
      <View style={styles.successPage}>
        <Text style={styles.message}>Registration Successful</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f8f8f8',
  },
  successPage: {
    width:'100%',
    maxWidth: 500,
    flex: 1,
    backgroundColor: '#fff'
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: 'green',
    padding: 20,
  },
});

export default Successful;
