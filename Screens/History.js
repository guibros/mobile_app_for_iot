import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';


const HistoryScreen = () => {
  const [date, setDate] = useState("")
  //const [isEnabled, setIsEnabled] = useState(false);

    return(
        <View style={styles.container}>
          <View>
            <TouchableOpacity style={[styles.historique]} 
                onPress={() => {
                  setDate(new Date().toLocaleString())
                  console.log("touch historique");}} 
            >
              <Text style={styles.btnText}>historique</Text>
            </TouchableOpacity >
          </View>
          <View>
            <Text style={styles.dateText}>{date}</Text>
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
      dateText:{
        fontSize:45,
        alignItems: 'center',
        justifyContent: 'center',
        color:'black',
        fontWeight: 'bold'
      },

});
export default HistoryScreen