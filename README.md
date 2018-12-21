# Body-Vitals-Monitoring-System
This repo contains code to monitor body vitals like ventricular rate, body temperature and SPO2 using MAX30105 Particle sensor through Photoplethysmography (PPG), which sends data to IoT hub and show the real-time data in a line chart on the web page and give warnings in case any of these vitals are out of its normal range. It also monitors max heart rate with respect to age.

## Introduction
This project aims at warning individuals and providing suggestions when any of the following occurs:
- Heartrate exceeds the maximum heart rate that a person can have. It takes age of the user as input in the web application for this purpose. It calculates Maximum Heart Rate allowed for that age and warn if the current heart rate exceeds as that can cause tear in muscles of heart.
- Peripheral capillary oxygen saturation (SpO2) of the person is out of range (Allowed range: 95-100). It calculates SpO2 of the person using the same PPG methodology.
- Body temperature is out of range (Allowed range: 97.7-99.5 F). It calibrates body temperature and provide appropriate suggestions based on its value.
- Predicts the current physical activity of the person (Fat burn, Cardio etc). It monitors the current zone of the heart and indicates the heart rate zone of the person whose heart rate is being monitored and predicts the current physical activity based on this.
- Warns individuals with Tachycardia to meet a doctor.
