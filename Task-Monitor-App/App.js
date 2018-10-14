import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import GoalItem from './src/components/GoalItem';

export default class App extends Component {
  state = {
    goalName: "",
    goals: []
  };

  goalChangedHandler = val => {
    this.setState({
      goalName: val,
    });
  };

  goalSubmitHandler = () => {
    if (this.state.goalName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        goals: prevState.goals.concat(prevState.goalName)
      };
    });
  };

  render() {
    const goalsOutput = this.state.goals.map((thisGoal, i) => (
      <GoalItem key={i}
      goalName={thisGoal}/>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add a goal"
            value={this.state.goalName}
            onChangeText={this.goalChangedHandler}
            style={styles.goalInput}
            
          />
          <Button
            title="Add"
            style={styles.goalInputButton}
            onPress={this.goalSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{goalsOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  goalInput: {
    width: "70%",
    fontSize: 20
  },
  goalInputButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
