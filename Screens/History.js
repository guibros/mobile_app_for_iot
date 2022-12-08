import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';

//https://fingobox.com/api/database/rows/124/BBuj3W25ij7cd3L8zEIMhY/109


const HistoryScreen = () => {

  const [logData, setLogData] = useState("")

  
  function get() {
    fetch('https://fingobox.com/api/database/rows/124/BBuj3W25ij7cd3L8zEIMhY/109')
    .then(response => response.json())
    .then(response => setLogData(response))
  }

  useFocusEffect(
    React.useCallback(() => {
        get()
        return () => {
      };
    }, [])
  );
  
  function affichageData(logData) {
    evenement = []
    let i = logData.length-1
    for (i; i >= 0; i--) {
        let date = JSON.parse(JSON.stringify(logData[i]))['date']
        let event = JSON.parse(JSON.stringify(logData[i]))['columns']['event']
        evenement.push( date + '   |   ' + event+ '\n\n')
    }
    return evenement
}

    return(
        <View style={styles.container}>
          <View style={styles.row}>
            <View>
              <Text style={styles.titleText}>DATE</Text>
            </View>
            <View>
              <Text style={styles.titleText}>EVENT</Text>
            </View>
          </View>
          <View>
            <Text style={styles.dataText}>{affichageData(logData)}</Text>
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      row: {
        flexDirection: "row",
     
    },
      btnText:{
        fontSize:45,
        color:'white',
        fontWeight: 'bold'
      },
      historique: {
        backgroundColor: "blue",
        borderRadius: 88,
        margin: 22,
        padding: 20,
        paddingBottom: 50,
        paddingLeft:50,
        paddingRight:50
    
      },
      dataText:{
        fontSize:15,
        alignItems: 'center',
        justifyContent: 'center',
        color:'black',
        fontWeight: 'bold',
      },
      titleText:{
        fontSize:30,
        alignItems: 'center',
        justifyContent: 'center',
        color:'black',
        fontWeight: 'bold',
        margin: 30,
        marginTop: 100
      },

});
export default HistoryScreen