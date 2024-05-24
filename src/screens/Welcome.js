import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Welcome = ({ route }) => {
  const { myName } = route.params;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}> Welcome {myName} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Welcome;
