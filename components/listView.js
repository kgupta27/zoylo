import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DocList from '../containers/DocList';

class ListView extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        }
    }
    // API

    // componentWillMount = () => {
    // onBook(){
    // data = {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "criteria": "",
    //             "gpsLatitude": 28.5103,
    //             "gpsLongitude": 77.0921,
    //             "size": "4",
    //             "page": "0",
    //             "distance": "",
    //             "homeVisit": "",
    //             "appointmentDate": "",
    //             "appointmentTime": "",
    //             "minFee": "",
    //             "maxFee": "",
    //             "onlineConsultation": "",
    //             "gender": [

    //             ],
    //             "amenities": [
    //                 ""
    //             ],
    //             "minExperience": "",
    //             "maxExperience": "",
    //             "language": [

    //             ],
    //             "paymentOption": [
    //                 ""
    //             ],
    //             "rating": "",
    //             "sortBy": ""
    //         }),
    //     }
    //     fetch('https://storm-devdb.zoylo.com/zoylogateway-0.0.1-SNAPSHOT/zoylodoctor/zoylodoctor-0.0.1-SNAPSHOT/api/doctor-details/filters', data)
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             // alert(JSON.parse(responseJson));
    //             console.log(responseJson);
    //             this.setState({
    //                 data: responseJson.data
    //             })
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    onBook() {
        this.props.navigation.navigate('DetailView');
    }

    render() {
        return (
             <View style={styles.container}>
                <View style={styles.docComponent}>
                    <View style={styles.docImage}>
                        {/* <Image>

                    </Image> */}
                    </View>
                    <View style={styles.Name}><Text>Dr. Niharika</Text><Text style={styles.docSubName}>
                        Dental</Text>
                        <Text>19 yr of Exp</Text></View></View>
                <View style={styles.docLocation}><Text>Hyderabad</Text></View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.onBook()}
                        style={styles.bookButton}
                    >
                    <Text>BOOK
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ListView;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'column',
        // height: 100,
        // width: 100
    },
    docImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#bbb',
    },
    docComponent: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 15,
        flexDirection: "row",
    },
    Name: {
        fontSize: 20,
        color: '#8A2BE2',
        height: 200,
        width: 200,
        marginLeft: 20,
        marginTop: 25,
    },
    docSubName: {
        fontSize: 15,
        color: '#000000'
    },
    docLocation: {
        fontSize: 18,
        color: '#808080',
        marginTop: 100,
        marginLeft: 40,
    },
    buttonContainer: {
        height: 40,
        width: 80,
        backgroundColor: '#ffa500',
    },
})