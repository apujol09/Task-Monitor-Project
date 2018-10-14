import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

const goalItem = (props) => (
  <View style = {styles.goalItem}>
    <Text style={{fontSize: 20}}>{props.goalName}</Text>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    margin: 2,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
  }
});

export default goalItem;