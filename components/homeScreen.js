import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from "react-native";

class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'HomeScreen',
        };
    };

    constructor(props) {
        super(props);
    }

    onPress = () => {
        console.warn("next!");
        this.props.navigation.navigate('List');
    }


    render() {
        let id;
        return (
            <View style={styles.container}>
                <Text>HomeScreen!</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                    // onClick={() => this.props.doctors(id++)}
                >
                    <Text> Touch Here </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DCDCDC"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});