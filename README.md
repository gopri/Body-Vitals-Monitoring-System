# Body-Vitals-Monitoring-System
This repo contains code to monitor body vitals like ventricular rate, body temperature and SPO2 using MAX30105 Particle sensor through Photoplethysmography (PPG), which sends data to IoT hub and show the real-time data in a line chart on the web page and give warnings in case any of these vitals are out of its normal range. It also monitors max heart rate with respect to age.

## Introduction
This project aims at warning individuals and providing suggestions when any of the following occurs:
- Heartrate exceeds the maximum heart rate that a person can have. It takes age of the user as input in the web application for this purpose. It calculates Maximum Heart Rate allowed for that age and warn if the current heart rate exceeds as that can cause tear in muscles of heart.
- Peripheral capillary oxygen saturation (SpO2) of the person is out of range (Allowed range: 95-100). It calculates SpO2 of the person using the same PPG methodology.
- Body temperature is out of range (Allowed range: 97.7-99.5 F). It calibrates body temperature and provide appropriate suggestions based on its value.
- Predicts the current physical activity of the person (Fat burn, Cardio etc). It monitors the current zone of the heart and indicates the heart rate zone of the person whose heart rate is being monitored and predicts the current physical activity based on this.
- Warns individuals with Tachycardia to meet a doctor.

## Benefits
Health monitoring is always a must. We are monitoring all the vitals that a patient gets checked once he/she gets admitted to a hospital (Body temperature, SpO2, pulse rate) or can be usedby individuals in day to day monitoring of their health.
1. Heart Rate Zone and Resting Heart Rate analysis give user the perfect idea about the state of their heart and lungs. This helps every individual in protecting themselves from cardio and pulmonary diseases.
2. It monitors SpO2 which helps monitoring for Hypoxia which is very vital in preventing failure of body parts.
3. It suggests the user to reduce cardio if heartrate exceeds the maximum value for his/her age keeping the client’s heart safe.
4. It also suggests user to get layered up/meet a doctor and monitor hyperpyrexia which is an emergency and needs immediate attention from a medical professional.

## Referneces
1. [Thesis on Cardiac Health Monitoring] (http://dspace.bracu.ac.bd/xmlui/bitstream/handle/10361/8621/13321005%2C13321032%2C13121082_EEE.pdf?sequence=1&isAllowed=y)
2. UC Irvine CS244P lab demos
3. Fitbit Heart Rate Zone Help Article 4. Harvard's Men's Health Watch publication on Max Heart Rate
5. MAX30105 Particle and Pulse Ox Sensor Hookup Guide
6. ESP8266 Thing Hookup Guide
