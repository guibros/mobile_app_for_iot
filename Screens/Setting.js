import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SettingScreen = () => {
    return(
        <View style={styles.wrapper}>
            <View >
                <Text style={styles.dateText}>Setting Screen</Text>
            </View>
            <View >
                <View >
                    <Text style={styles.dateText}>Projet par</Text>
                </View>
                <View >
                    <Text style={styles.dateText}>Hugues Santerre</Text>
                </View>
                <View >
                    <Text style={styles.dateText}>Guillaume Potvin Brossard</Text>
                </View>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    dateText:{
        fontSize:25,
        alignItems: 'center',
        justifyContent: 'flex-end',
        color:'black',
        fontWeight: 'bold'
      },


});
export default SettingScreen