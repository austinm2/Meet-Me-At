import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RoundButton from '../components/RoundButton'
import InvitationButton from '../components/InvitationButton'
import { globalStyles } from '../styles/globalStyles'

export default function JoinEvent() {
    return(
        <View style={[globalStyles.container, {backgroundColor: '#e4e4e4'}]}>
            
            <View style={[styles.box, styles.container1]}>
                <Text style={[globalStyles.darkText, styles.header]}>Your Invitations</Text>
                <InvitationButton eventTitle="Event Title" eventDate="Saturday, October 31" onPress={ () => console.log("Event Invitation Pressed")}/>
                <InvitationButton eventTitle="Event Title" eventDate="Saturday, October 31" onPress={ () => console.log("Event Invitation Pressed")}/>
                <InvitationButton eventTitle="Event Title" eventDate="Saturday, October 31" onPress={ () => console.log("Event Invitation Pressed")}/>
            </View>
            
            <View style={[styles.box, styles.container2]}>
                <Text style={[globalStyles.darkText, styles.header]}>Join Event</Text>
                <TextInput
                    style={[globalStyles.input, {width: 300, marginTop: 20}]}
                    placeholder= "code/link"
                    placeholderTextColor = "#D0D0D0"
                    autoCapitalize = 'none' 
                    autoCorrect={false} 
                />
                <RoundButton style={{backgroundColor: '#FF6961',  marginTop: 25}} text="Join" onPress={ () => console.log("Join Pressed")} />
            </View>
        
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fcfcfc',
        padding: 15,
        padding: 15,
        borderRadius: 10,
        margin: 12
    },
    container1: {
        width: 340,
        height: 450,
        marginTop: 20,
    },
      container2: {
        width: 340,
        height: 220,
    },
    header: {
        fontSize: 35, 
        fontFamily: 'SFProDisplay-Bold',
        marginBottom: 5
    }
});