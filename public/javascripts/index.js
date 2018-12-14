$(document).ready(function () {
                  var timeData = [],
                  heartRateData = [],
                  threshold = 0,
                  defaultThreshold = 250,
                  initialValues = [],
                  tempData = [],
                  repCount = 0,
                  spo2Data = [],
                  maxHeartRate = -100000,
                  minHeartRate = 100000,
                  maxTemp = -100000,
                  minTemp = 100000,
                  maxSPO2 = -100000,
                  minSPO2 = 100000,
                  curHealthMsg = "",
                  ageSet = 25,
                  flag = 0;

                  var data = {
                  labels: timeData,
                  datasets: [
                             {
                             fill: false,
                             label: 'Heart Rate',
                             yAxisID: 'Peaks',
                             borderColor: "rgba(255, 204, 0, 1)",
                             pointBoarderColor: "rgba(255, 204, 0, 1)",
                             backgroundColor: "rgba(255, 204, 0, 0.4)",
                             pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                             pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                             data: heartRateData
                             }
                             ]
                  }
                  
                  var data2 = {
                  labels: timeData,
                  datasets: [
                             {
                             fill: false,
                             label: 'BeatsAvg',
                             yAxisID: 'BeatsAvg',
                             borderColor: "rgba(255, 204, 0, 1)",
                             pointBoarderColor: "rgba(255, 204, 0, 1)",
                             backgroundColor: "rgba(255, 204, 0, 0.4)",
                             pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                             pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                             data: spo2Data
                             }
                             ]
                  }
                  
                  var data3 = {
                  labels: timeData,
                  datasets: [
                             {
                             fill: false,
                             label: 'Temperature',
                             yAxisID: 'Temperature',
                             borderColor: "rgba(255, 204, 0, 1)",
                             pointBoarderColor: "rgba(255, 204, 0, 1)",
                             backgroundColor: "rgba(255, 204, 0, 0.4)",
                             pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                             pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                             data: tempData
                             }
                             ]
                  }
                  
                  var basicOption3 = {
                  title: {
                  display: true,
                  text: 'Temperature Real-time Data',
                  fontSize: 20
                  },
                  scales: {
                  yAxes: [{
                          id: 'Temperature',
                          type: 'linear',
                          scaleLabel: {
                          labelString: 'Temperature',
                          display: true
                          },
                          position: 'left',
                          }]
                  }
                  }
                  
                  var basicOption2 = {
                  title: {
                  display: true,
                  text: 'BeatsAvg Real-time Data',
                  fontSize: 20
                  },
                  scales: {
                  yAxes: [{
                          id: 'BeatsAvg',
                          type: 'linear',
                          scaleLabel: {
                          labelString: 'BeatsAvg',
                          display: true
                          },
                          position: 'left',
                          }]
                  }
                  }
                  
                  var basicOption = {
                  title: {
                  display: true,
                  text: 'Heart Rate Real-time Data',
                  fontSize: 20
                  },
                  scales: {
                  yAxes: [{
                          id: 'Peaks',
                          type: 'linear',
                          scaleLabel: {
                          labelString: 'Heart Rate',
                          display: true
                          },
                          position: 'left',
                          }]
                  }
                  }
                  
                  //Get the context of the canvas element we want to select
                  var ctx = document.getElementById("myChart").getContext("2d");
                  var ctx2 = document.getElementById("myChart2").getContext("2d");
                  var ctx3 = document.getElementById("myChart3").getContext("2d");
                  var optionsNoAnimation = { animation: false }
                  var myLineChart = new Chart(ctx, {
                                              type: 'line',
                                              data: data,
                                              options: basicOption
                                              });
                  
                  var myLineChart2 = new Chart(ctx2, {
                                              type: 'line',
                                              data: data2,
                                              options: basicOption2
                                              });
                  
                  var myLineChart3 = new Chart(ctx3, {
                                               type: 'line',
                                               data: data3,
                                               options: basicOption3
                                               });
                  
                  var ws = new WebSocket('wss://' + location.host);

                  ws.onopen = function () {
                    console.log('Successfully connect WebSocket');
                  }

                  ws.onmessage = function (message) {
                    console.log('receive message' + message.data);
                    try {
                        curHealthMsg = '';

                        flag = 0;

                        var obj = JSON.parse(message.data);
                        
                        timeData.push(obj.time);

                        heartRateData.push(obj.IR);
                        
                        spo2Data.push(obj.green);
                        tempData.push(obj.red);

                        // only keep no more than 50 points in the line chart
                        const maxLen = 50;
                        var len = timeData.length;
                        if (len > maxLen) {
                            timeData.shift();
                            heartRateData.shift();
                            spo2Data.shift();
                            tempData.shift();
                        }
                        
                        myLineChart.update();
                        myLineChart2.update();
                        myLineChart3.update();

                        if (maxHeartRate<obj.IR){
                            maxHeartRate = obj.IR
                        }
                        if (minHeartRate>obj.IR){
                            minHeartRate = obj.IR
                        }

                        /*
                        if (maxSPO2<obj.IR){
                            maxSPO2 = obj.IR
                        }
                        if (minSPO2>obj.IR){
                            minSPO2 = obj.IR
                        }
                        */
                        if (maxTemp<obj.red){
                            maxTemp = obj.red
                        }
                        if (minTemp>obj.red){
                            minTemp = obj.red
                        }

                        ageSet = document.getElementById("demo");

                        $("#label1").html(maxHeartRate);
				        $("#label2").html(minHeartRate);
                        //$("#label3").html(maxSPO2);
                        //$("#label4").html(minSPO2);
				        $("#label5").html(maxTemp);
                        $("#label6").html(minTemp);

                        var l1 = document.getElementById("label1");
                        var l2 = document.getElementById("label2");
                        //var l3 = document.getElementById("label3");
                        //var l4 = document.getElementById("label4");
                        var l5 = document.getElementById("label5");
                        var l6 = document.getElementById("label6");

                        if (maxHeartRate>152){
                            l1.style.backgroundColor = "red";
                            flag = 1;
                            curHealthMsg = curHealthMsg + "<br/>Heart rate above max possible heart rate";
                            //document.getElementById("curHealth").innerHTML = "Heart rate above max possible heart rate"
                        }
                        else{
                            l1.style.backgroundColor = "white";
                            curHealthMsg = curHealthMsg + "<br/>Heart rate is normal";
                            //document.getElementById("curHealth").innerHTML = "Heart rate is normal"
                        }

                        if (minHeartRate<65){
                            l2.style.backgroundColor = "red";
                            flag = 1;
                            curHealthMsg = curHealthMsg + "<br/>Resting Heart rate is not in normal range of 60 to 100 beats per minute";
                            //document.getElementById("curHealth").innerHTML += "Resting Heart rate is not in normal range of 60 to 100 beats per minute"
                        }
                        else{
                            l2.style.backgroundColor = "white";
                            curHealthMsg = curHealthMsg + "<br/>Resting Heart rate is normal";
                            //document.getElementById("curHealth").innerHTML = "Resting Heart rate is normal"
                        }

                        if (maxTemp>104){
                            l5.style.backgroundColor = "red";
                            flag = 1;
                            curHealthMsg = curHealthMsg + "<br/>Temp is in more than 104F";
                            //document.getElementById("curHealth").innerHTML += "Temp is in more than 99.5F"
                        }
                        else if(minTemp<68){
                            l6.style.backgroundColor = "red";
                            flag = 1;
                            curHealthMsg = curHealthMsg + "\r\nTemp is in below 68F";
                            //document.getElementById("curHealth").innerHTML += "Temp is in below 97.7F"
                        }
                        else{
                            l5.style.backgroundColor = "white";
                            l6.style.backgroundColor = "white";
                            curHealthMsg = curHealthMsg + "<br/>Temp is in normal range";
                            //document.getElementById("curHealth").innerHTML = "Temp is normal"
                        }      
                        
                        if(obj.IR<=89){
                            curHealthMsg = curHealthMsg + "<br/><br/>Heart Rate range: Normal";
                        }
                        else if(obj.IR<=110){
                            curHealthMsg = curHealthMsg + "<br/>Heart Rate range: Out of Zone";
                        }
                        else if(obj.IR<=135){
                            curHealthMsg = curHealthMsg + "<br/>Heart Rate range: Fat Burn Zone";
                        }
                        else if(obj.IR<=152){
                            curHealthMsg = curHealthMsg + "<br/>Heart Rate range: Cardio Zone";
                        }
                        else{
                            curHealthMsg = curHealthMsg + "<br/>Heart Rate range: Peak Zone";
                        }

                        if(obj.red<=68){
                            curHealthMsg = curHealthMsg + "<br/><br/>Temperature range: Warm up warning";
                        }
                        else if(obj.red>=104){
                            curHealthMsg = curHealthMsg + "<br/>Temperature range: Suggestion to see a doctor";
                        }

                        $("#curHealth").html(curHealthMsg);
                        if (flag==1){
                            email();
                        }
                
                    } catch (err) {
                        console.error(err);
                    }
                  }
});
