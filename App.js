import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white', 
    };
  }
     handleButtonClick = (newColor) => {
    this.setState({ backgroundColor: newColor });
  };
  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent
          backgroundColor="green"
          //message="Green button clicked!"
          onClick={this.handleButtonClick}
          colorChange="green"
        />
        <ButtonComponent
          backgroundColor="blue"
          //message="Blue button clicked!"
          onClick={this.handleButtonClick}
          colorChange="blue"
        />
        <ButtonComponent
          backgroundColor="brown"
          //message="Brown button clicked!"
          onClick={this.handleButtonClick}
          colorChange="brown"
        />
        <ButtonComponent
          backgroundColor="yellow"
          //message="Yellow button clicked!"
          onClick={this.handleButtonClick}
          colorChange="yellow"
        />
        <ButtonComponent
          backgroundColor="red"
          //message="Red button clicked!"
          onClick={this.handleButtonClick}
          colorChange="red"
        />
        <ButtonComponent
          backgroundColor="black"
          message="Black button clicked!"
          onClick={this.handleButtonClick}
          colorChange="black"
        />
      </View>
    );
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, onClick, colorChange } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(colorChange)}
      >
        <Text style={styles.buttonText}>{backgroundColor.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
