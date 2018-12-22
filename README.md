# Body-Vitals-Monitoring-System
This repo contains code to monitor body vitals like ventricular rate, body temperature and SPO2 using MAX30105 Particle sensor through Photoplethysmography (PPG), which sends data to IoT hub and show the real-time data in a line chart on the web page and give warnings in case any of these vitals are out of its normal range. It also monitors max heart rate with respect to age.

## Introduction
This project aims at warning individuals and providing suggestions when any of the following occurs:
- Heartrate exceeds the maximum heart rate that a person can have. It takes age of the user as input in the web application for this purpose. It calculates Maximum Heart Rate allowed for that age and warn if the current heart rate exceeds as that can cause tear in muscles of heart.
- Peripheral capillary oxygen saturation (SpO2) of the person is out of range (Allowed range: 95-100). It calculates SpO2 of the person using the same PPG methodology.
- Body temperature is out of range (Allowed range: 97.7-99.5 F). It calibrates body temperature and provide appropriate suggestions based on its value.
- Predicts the current physical activity of the person (Fat burn, Cardio etc). It monitors the current zone of the heart and indicates the heart rate zone of the person whose heart rate is being monitored and predicts the current physical activity based on this.
- Warns individuals with Tachycardia to meet a doctor.

## Architecture
(Individual) Wireless sensor node --> Wi-Fi (Sparkfun ESP8266) --> Cloud services (Microsoft Azure) --> (End User) Web Application 

## Project Workflow
### User End
Connect MAX30105 particle sensor with Sparkfun ESP8266 Thing Dev. This sensor initially asks for user to place finger on sensor and then calibrates heart rate and SpO2. Once calibration is done, sensor continuously monitors Body Temperature (degree Fahrenheit), Ventricular Rate, SpO2 and send that data over cloud to Web Application.

### Cloud Server(Microsoft Azure)
It sends data from client’s end to the Azure server, where webapp is hosted. Device is already registered at the server and using the IOT Hub’s connection string and Device registration connection string, it makes connection between local system and the remote server.

## Hardware Components used
1. Sparkfun ESP8266 Thing Dev
2. MAX30105 Particle Sensor

Check [this](https://learn.sparkfun.com/tutorials/esp8266-thing-development-board-hookup-guide/all) for more details on Sparkfun ESP8266 Thing Development Board.
Check [this](https://learn.sparkfun.com/tutorials/max30105-particle-and-pulse-ox-sensor-hookup-guide/all) for more details on SparkFun MAX30105 Particle Sensor.

## Deploying IoTHub/Webapp in Microsoft Azure
Follow [this tutorial](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-raspberry-pi-kit-node-get-started) to setup your device in Azure IoT hub.
Follow [this tutorial](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-web-apps) to deploy webapp in Azure.

## Benefits
Health monitoring is always a must. We are monitoring all the vitals that a patient gets checked once he/she gets admitted to a hospital (Body temperature, SpO2, pulse rate) or can be usedby individuals in day to day monitoring of their health.
1. Heart Rate Zone and Resting Heart Rate analysis give user the perfect idea about the state of their heart and lungs. This helps every individual in protecting themselves from cardio and pulmonary diseases.
2. It monitors SpO2 which helps monitoring for Hypoxia which is very vital in preventing failure of body parts.
3. It suggests the user to reduce cardio if heartrate exceeds the maximum value for his/her age keeping the client’s heart safe.
4. It also suggests user to get layered up/meet a doctor and monitor hyperpyrexia which is an emergency and needs immediate attention from a medical professional.

## References
1. [Thesis on Cardiac Health Monitoring](http://dspace.bracu.ac.bd/xmlui/bitstream/handle/10361/8621/13321005%2C13321032%2C13121082_EEE.pdf?sequence=1&isAllowed=y)
2. [UC Irvine CS244P lab demos](https://login.uci.edu/ucinetid/webauth?return_url=https%3A%2F%2Feee.uci.edu%2F18f%2F35430%2Fhome%2FDemo_6.pdf)
3. [Fitbit Heart Rate Zone Help Article](https://help.fitbit.com/articles/en_US/Help_article/1565)
4. [Harvard's Men's Health Watch publication on Max Heart Rate](https://www.bodybuilding.com/fun/matt62.htm)
5. [MAX30105 Particle and Pulse Ox Sensor Hookup Guide](https://learn.sparkfun.com/tutorials/max30105-particle-and-pulse-ox-sensor-hookup-guide/all)
6. [ESP8266 Thing Hookup Guide](https://learn.sparkfun.com/tutorials/esp8266-thing-hookup-guide/installing-the-esp8266-arduino-addon)
7. [Real-time data visualization with Azure IoT hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-web-apps)
