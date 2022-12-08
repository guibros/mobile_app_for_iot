// Screens/HomeMQTT.js

import Paho from "paho-mqtt";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';



export default function HomeMQTT() {


  function post(evenement) {
    let date = new Date().toLocaleString();
    fetch('https://fingobox.com/api/database/row', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          "app_id": 124,
          "app_token": "BBuj3W25ij7cd3L8zEIMhY",
          "database_id": 109,
          "database_column_values": {
              "event": evenement,
              "date": date,
          }
        })
    })
    .then(response => response.json())
}


  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [etatTrig, setEtatTrig] = useState("OFF")
  const [etatTrig1, setEtatTrig1] = useState("OFF")
  const [etatTrig2, setEtatTrig2] = useState("OFF")



  function onMessage(message) {
    if (message.destinationName === "mqtt-async-test/trig") {
        setIsEnabled(("true" === message.payloadString));
        console.log("function onMessage trig", message.payloadString)
        if("true" === message.payloadString){
          setEtatTrig("ON")
          post("Lumiere entree open")
        } else{
          setEtatTrig("OFF")
          post("Lumiere entree close")
        }
    }
    if (message.destinationName === "mqtt-async-test/trig1") {
        setIsEnabled1(("true" === message.payloadString));
        console.log("function onMessage trig1", message.payloadString)
        if("true" === message.payloadString){
          setEtatTrig1("ON")
          post("Lumiere salon open")
        } else{
          setEtatTrig1("OFF")
          post("Lumiere salon close")
        }
    }
    if (message.destinationName === "mqtt-async-test/trig2") {
        setIsEnabled2(("true" === message.payloadString));
        console.log("function onMessage trig2", message.payloadString)
        if("true" === message.payloadString){
          setEtatTrig2("ON")
          post("Alarme open")
        } else{
          setEtatTrig2("OFF")
          post("Alarme close")
        }
    }
  }


  useEffect(() => {
    client.connect( {
      onSuccess: () => { 
      console.log("Connected!");
      client.subscribe("mqtt-async-test/trig");
      console.log("Connected! trig");
      client.subscribe("mqtt-async-test/value");
      console.log("Connected! value");
      client.subscribe("mqtt-async-test/trig1");
      console.log("Connected! trig1");
      client.subscribe("mqtt-async-test/trig2");
      console.log("Connected! trig2");
      client.onMessageArrived = onMessage;
      console.log("Connected! message");
    },
    onFailure: () => {
      console.log("Failed to connect!"); 
    }
  });
  }, [])

    const toggleSwitch = () => {
        if(isEnabled === false) {
            msg = true
        } else if (isEnabled === true) {
            msg = false
        }
        const message = new Paho.Message(msg.toString());
        message.destinationName = "mqtt-async-test/trig";
        client.send(message);
    console.log("function changeValueTrig ", msg); }
    
    const toggleSwitch1 = () => {
        if(isEnabled1 === false) {
            msg = true
        } else if (isEnabled1 === true) {
            msg = false
        }
        const message = new Paho.Message(msg.toString());
        message.destinationName = "mqtt-async-test/trig1";
        client.send(message);
        console.log("function changeValueTrig ", msg); }
    
    const toggleSwitch2 = () => {
        if(isEnabled2 === false) {
            msg = true
        } else if (isEnabled2 === true) {
            msg = false
        }
        const message = new Paho.Message(msg.toString());
        message.destinationName = "mqtt-async-test/trig2";
        client.send(message);
        console.log("function changeValueTrig ", msg); }

  function changeValueTrig(c) {
    if(isEnabled === false) {
        msg = true
    } else if (isEnabled === true) {
        msg = false
    }
    const message = new Paho.Message(msg.toString());
    message.destinationName = "mqtt-async-test/trig";
    c.send(message);
    console.log("function changeValueTrig ", msg); 
  }

  function changeValueTrig1(c) {
    if(isEnabled1 === false) {
        msg = true
    } else if (isEnabled1 === true) {
        msg = false
    }
    const message = new Paho.Message(msg.toString());
    message.destinationName = "mqtt-async-test/trig1";
    c.send(message);
    console.log("function changeValueTrig1 ", msg); 
  }

  function changeValueTrig2(c) {
    if(isEnabled2 === false) {
        msg = true
    } else if (isEnabled2 === true) {
        msg = false
    }
    const message = new Paho.Message(msg.toString());
    message.destinationName = "mqtt-async-test/trig2";
    c.send(message);
    console.log("function changeValueTrig2 ", msg); 
  }

  

  return (
    <View style={styles.container}>
            <TouchableOpacity 
                style={styles.trigger}
                onPress={() => { changeValueTrig(client);}} 
            >
                    <Text style={styles.btnText}>Lumière entrée</Text>
                    <Switch
                        trackColor={{ false: "red", true: "green" }}
                        ios_backgroundColor="red"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.etatText}>{etatTrig}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.trigger}
                onPress={() => { changeValueTrig1(client);}} 
            >
                    <Text style={styles.btnText}>Lumière salon</Text>
                    <Switch
                        trackColor={{ false: "red", true: "green" }}
                        ios_backgroundColor="red"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                    <Text style={styles.etatText}>{etatTrig1}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.trigger}
                onPress={() => { changeValueTrig2(client);}} 
            >
                    <Text style={styles.btnText}>Alarme</Text>
                    <Switch
                        trackColor={{ false: "red", true: "green" }}
                        ios_backgroundColor="red"
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                    />
                    <Text style={styles.etatText}>{etatTrig2}</Text>
            </TouchableOpacity>
        </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trigger:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 88, 
    backgroundColor: "purple",
    margin: 22, 
    paddingLeft:50,
    paddingRight:50,
    width: "95%",
  },
  btnText:{
    fontSize:40,
    color:'white',
    fontWeight: 'bold'
  },
  btnmqtt: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "blue",
    borderRadius: 88,
    margin: 22,
    padding: 20,
    paddingBottom: 50,
    paddingLeft:50,
    paddingRight:50,
    width: "95%",
  },
  etatText:{
    fontSize:20,
    color:'white',
    fontWeight: 'bold'
  },

});
