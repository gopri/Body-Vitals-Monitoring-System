$(document).ready(function () {
    Email = { send: function (e, o, t, n, a, s, r, c) { var d = Math.floor(1e6 * Math.random() + 1), i = "From=" + e; i += "&to=" + o, i += "&Subject=" + encodeURIComponent(t), i += "&Body=" + encodeURIComponent(n), void 0 == a.token ? (i += "&Host=" + a, i += "&Username=" + s, i += "&Password=" + r, i += "&Action=Send") : (i += "&SecureToken=" + a.token, i += "&Action=SendFromStored", c = a.callback), i += "&cachebuster=" + d, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", i, c) }, sendWithAttachment: function (e, o, t, n, a, s, r, c, d) { var i = Math.floor(1e6 * Math.random() + 1), m = "From=" + e; m += "&to=" + o, m += "&Subject=" + encodeURIComponent(t), m += "&Body=" + encodeURIComponent(n), m += "&Attachment=" + encodeURIComponent(c), void 0 == a.token ? (m += "&Host=" + a, m += "&Username=" + s, m += "&Password=" + r, m += "&Action=Send") : (m += "&SecureToken=" + a.token, m += "&Action=SendFromStored"), m += "&cachebuster=" + i, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", m, d) }, ajaxPost: function (e, o, t) { var n = Email.createCORSRequest("POST", e); n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onload = function () { var e = n.responseText; void 0 != t && t(e) }, n.send(o) }, ajax: function (e, o) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; void 0 != o && o(e) }, t.send() }, createCORSRequest: function (e, o) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, o, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, o) : t = null, t } };
    var curl='smtp.elasticemail.com';
       var cfrom='goyalpriyanka.pg@gmail.com';
       var cto='goyalpriyanka.pg@gmail.com';
       var cuserName='goyalpriyanka.pg@gmail.com';
       var cPassword='68747b4e-ebdc-48e3-9b2b-2b39340d4c5e';
       Email.send(cfrom,
           cto,
           csub,
           'Visa slot availability ',
           curl,
           cuserName,
           cPassword);
                  
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
                  ageSet = 25;

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
                        var obj = JSON.parse(message.data);
                        /*var step = 0;
                        
                        if(obj.voltage>450){
                            step = 1;
                        }
                        
                        var flexCount = 0;
                        for(var i=0;i<spo2Data.length;i++){
                            if(spo2Data[i]==1){
                                flexCount++;
                            }
                        }
                        var avgSetsDone = flexCount/12;*/
                        
                        timeData.push(obj.time);

                        heartRateData.push(obj.IR);
                        /*if(obj.voltage>450){
                            intensityData.push(obj.voltage);
                        }else{
                            intensityData.push(450);
                        }*/
                        
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

                        if (maxHeartRate>(220-ageSet)){
                            l1.style.backgroundColor = "red";
                            curHealthMsg = curHealthMsg + "\r\nHeart rate above max possible heart rate";
                            //document.getElementById("curHealth").innerHTML = "Heart rate above max possible heart rate"
                        }
                        else{
                            l1.style.backgroundColor = "white";
                            curHealthMsg = curHealthMsg + "\r\nHeart rate is normal";
                            //document.getElementById("curHealth").innerHTML = "Heart rate is normal"
                        }

                        if (minHeartRate>100 || minHeartRate<60){
                            l2.style.backgroundColor = "red";
                            curHealthMsg = curHealthMsg + "\r\nResting Heart rate is not in normal range of 60 to 100 beats per minute";
                            //document.getElementById("curHealth").innerHTML += "Resting Heart rate is not in normal range of 60 to 100 beats per minute"
                        }
                        else{
                            l2.style.backgroundColor = "white";
                            curHealthMsg = curHealthMsg + "\r\nResting Heart rate is normal";
                            //document.getElementById("curHealth").innerHTML = "Resting Heart rate is normal"
                        }

                        if (maxTemp>99.5){
                            l5.style.backgroundColor = "red";
                            curHealthMsg = curHealthMsg + "\r\nTemp is in more than 99.5F";
                            //document.getElementById("curHealth").innerHTML += "Temp is in more than 99.5F"
                        }
                        else if(minTemp<97.7){
                            l6.style.backgroundColor = "red";
                            curHealthMsg = curHealthMsg + "\r\nTemp is in below 97.7F";
                            //document.getElementById("curHealth").innerHTML += "Temp is in below 97.7F"
                        }
                        else{
                            l5.style.backgroundColor = "white";
                            l6.style.backgroundColor = "white";
                            curHealthMsg = curHealthMsg + "\r\nTemp is normal";
                            //document.getElementById("curHealth").innerHTML = "Temp is normal"
                        }      
                        
                        $("#curHealth").html(curHealthMsg);
                
                    } catch (err) {
                        console.error(err);
                    }
                  }
});
