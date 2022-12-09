# Mobile (IOS/Android) App to Command a ConnectedObject

The React Native app switches command components on a connected objet; like a Raspberry Pi or amicrocontroller. The commands go through a MQTT server. The target RPi or MCU sends back the change of state though the same MQTT server. The app shows the state of each component onthe RPi or the MCU. The outcoming and incoming activities are saved to an online database, FingoBox, and display within the app.

|  <img width="379" alt="image" src="https://user-images.githubusercontent.com/116329812/206798308-42817ada-4929-4c46-b02a-35aa8a4d11c8.png">|  <img width="386" alt="image" src="https://user-images.githubusercontent.com/116329812/206798396-45983bb5-b231-4944-b56f-4edc9823c5c3.png">  |
|-----|-----|
|  <img width="385" alt="image" src="https://user-images.githubusercontent.com/116329812/206798489-68cf242d-6238-42a4-aee7-a6b468ccbbdd.png">   |<img width="381" alt="image" src="https://user-images.githubusercontent.com/116329812/206798254-ed0f15d5-fa92-461f-a54b-bb813ba0a2cf.png">   |



- Start from myApp folder with expo react native command "npm start" 
- Install Expo on handheld device
- Read QR code with handheld device camera 
