# Mobile (IOS/Android) App to Command a ConnectedObject

The React Native app switches command components on a connected objet; like a Raspberry Pi or amicrocontroller. The commands go through a MQTT server. The target RPi or MCU sends back the change of state though the same MQTT server. The app shows the state of each component onthe RPi or the MCU. The outcoming and incoming activities are saved to an online database, FingoBox, and display within the app.

|  <img width="200" alt="image" src="https://user-images.githubusercontent.com/116329812/206801302-1a17a14d-fc61-4f3a-a69e-1c6e6164e2d4.png">|  <img width="199" alt="image" src="https://user-images.githubusercontent.com/116329812/206801355-e0baf5e6-3582-47e2-91a4-9436c21b322d.png">  |
|-----|-----|
|  <img width="198" alt="image" src="https://user-images.githubusercontent.com/116329812/206801434-e61edebc-ea92-4a5f-b532-26338559a88f.png">   |<img width="200" alt="image" src="https://user-images.githubusercontent.com/116329812/206801486-f18a24a0-f13a-4c2a-909c-166f90e67dde.png">  |



- Start from myApp folder with expo react native command "npm start" 
- Install Expo on handheld device
- Read QR code with handheld device camera 
