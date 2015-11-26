"use strict";

var React = require("react-native");

var {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
} = React;

var GameSetup = React.createClass({

getInitialState: function(){
  console.log(this.props.username)
  return {
    player1: this.props.username,
    player2: "",
    player3: "",
    player4: "",

  }
},
render: function() {
  console.log(this.state)
    return (
    <Image source={require('./bdg.jpeg')} style={styles.backgroundImage}>
        <View style={styles.container}>
            <Text style={styles.title}>
                Enter Players Below
            </Text>
            <Text>Player 1 {this.state.player1}</Text>
            <View>
                <TextInput
                    placeholder="Player 2"
                    onChange={(event) => this.setState({player2: event.nativeEvent.text})}
                    style={styles.formInput}
                    value={this.state.player2} />
                <TextInput
                    placeholder="Player 3"
                    onChange={(event) => this.setState({player3: event.nativeEvent.text})}
                    style={styles.formInput}
                    value={this.state.player3} />
                <TextInput
                    placeholder="Player 4"
                    onChange={(event) => this.setState({player4: event.nativeEvent.text})}
                    style={styles.formInput}
                    value={this.state.player4} />
                <TouchableHighlight onPress={(this.onSubmitPressed)} style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>
            </View>
        </View>
     </Image>
    );
},

});
var styles = StyleSheet.create({
    container: {
      backgroundColor: '#006400',
      padding: 30,
      marginTop: 65,
      alignItems: "stretch"
    },
    flowright: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch'
    },
    backgroundImage: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    },
    formInput: {
        height: 16,
        padding: 1,
        marginRight: 2,
        marginBottom: 2,
        marginTop: 2,
        textAlign: 'center',
        flex: 1,
        fontSize: 13,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 6,
        color: "black",
        opacity: 1,
        backgroundColor: 'white',
    },
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
    subheading: {
        color: "#cccccc"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
});


module.exports = GameSetup