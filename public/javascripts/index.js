$(document).ready(function () {

    var dateString=$('.leftPanelText').text();
    dateString=$.trim(dateString);
    dateString=dateString.substring(31);
    console.log(dateString);
    var day=dateString.split(" ")[2];
    day=day.substring(0,day.length-1);
    //console.log(day);
    
        Email = { send: function (e, o, t, n, a, s, r, c) { var d = Math.floor(1e6 * Math.random() + 1), i = "From=" + e; i += "&to=" + o, i += "&Subject=" + encodeURIComponent(t), i += "&Body=" + encodeURIComponent(n), void 0 == a.token ? (i += "&Host=" + a, i += "&Username=" + s, i += "&Password=" + r, i += "&Action=Send") : (i += "&SecureToken=" + a.token, i += "&Action=SendFromStored", c = a.callback), i += "&cachebuster=" + d, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", i, c) }, sendWithAttachment: function (e, o, t, n, a, s, r, c, d) { var i = Math.floor(1e6 * Math.random() + 1), m = "From=" + e; m += "&to=" + o, m += "&Subject=" + encodeURIComponent(t), m += "&Body=" + encodeURIComponent(n), m += "&Attachment=" + encodeURIComponent(c), void 0 == a.token ? (m += "&Host=" + a, m += "&Username=" + s, m += "&Password=" + r, m += "&Action=Send") : (m += "&SecureToken=" + a.token, m += "&Action=SendFromStored"), m += "&cachebuster=" + i, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", m, d) }, ajaxPost: function (e, o, t) { var n = Email.createCORSRequest("POST", e); n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onload = function () { var e = n.responseText; void 0 != t && t(e) }, n.send(o) }, ajax: function (e, o) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; void 0 != o && o(e) }, t.send() }, createCORSRequest: function (e, o) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, o, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, o) : t = null, t } };
        //alert(dateString);
         
  //window.open('https://www.youtube.com/watch?v=YFfEFbC9_XQ','_blank');
        var curl1='smtp.elasticemail.com';
        var cfrom1='goyalpriyanka.in@gmail.com';
        var cto1='goyalpriyanka.in@gmail.com';
        var csub1=dateString+" at "+new Date().toLocaleString();
        var cuserName1='goyalpriyanka.pg@gmail.com';
        var cPassword1='68747b4e-ebdc-48e3-9b2b-2b39340d4c5e';
        Email.send(cfrom,
            cto1,
            csub1,
            'Visa slot availability '+dateString+" "+new Date().toLocaleString(),
            curl1,
            cuserName1,
            cPassword1);
        
        
    
    setTimeout(function() {
      location.reload();
    }, 45000);




                  var timeData = [],
                  heartRateData = [],
                  threshold = 0,
                  defaultThreshold = 250,
                  initialValues = [],
                  tempData = [],
                  repCount = 0,
                  spo2Data = [],
                  spo2Data1 = [],
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
                             },
                             {
                                fill: false,
                                label: 'BeatsAvg',
                                yAxisID: 'BeatsAvg',
                                borderColor: "rgba(24, 120, 240, 1)",
                                pointBoarderColor: "rgba(24, 120, 240, 1)",
                                backgroundColor: "rgba(24, 120, 240, 0.4)",
                                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                                data: spo2Data
                                }
                             ]
                  }
                  
                  var data2 = {
                  labels: timeData,
                  datasets: [
                             {
                             fill: false,
                             label: 'SPO2',
                             yAxisID: 'SPO2',
                             borderColor: "rgba(255, 204, 0, 1)",
                             pointBoarderColor: "rgba(255, 204, 0, 1)",
                             backgroundColor: "rgba(255, 204, 0, 0.4)",
                             pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                             pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                             data: spo2Data1
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
                  text: 'SPO2 Real-time Data',
                  fontSize: 20
                  },
                  scales: {
                  yAxes: [{
                          id: 'SPO2',
                          type: 'linear',
                          scaleLabel: {
                          labelString: 'SPO2',
                          display: true
                          },
                          position: 'left',
                          }]
                  }
                  }
                  
                  var basicOption = {
                  title: {
                  display: true,
                  text: 'Heart Rate & BeatsAvg Real-time Data',
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
                          },
                          {
                            id: 'BeatsAvg',
                            type: 'linear',
                            scaleLabel: {
                            labelString: 'BeatsAvg',
                            display: true
                            },
                            position: 'right',
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
                        spo2Data1.push(obj.fspo2);

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

                        ageSet = document.getElementById("demo").innerHTML;

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
                            //curHealthMsg = curHealthMsg + "<br/>Heart rate above max possible heart rate";
                            //document.getElementById("curHealth").innerHTML = "Heart rate above max possible heart rate"
                        }
                        else{
                            l1.style.backgroundColor = "white";
                            //curHealthMsg = curHealthMsg + "<br/>Heart rate is normal";
                            //document.getElementById("curHealth").innerHTML = "Heart rate is normal"
                        }

                        /*if (minHeartRate<65){
                            l2.style.backgroundColor = "red";
                            flag = 1;
                            curHealthMsg = curHealthMsg + "<br/>Resting Heart rate is not in normal range of 60 to 100 beats per minute";
                            //document.getElementById("curHealth").innerHTML += "Resting Heart rate is not in normal range of 60 to 100 beats per minute"
                        }
                        else{
                            l2.style.backgroundColor = "white";
                            curHealthMsg = curHealthMsg + "<br/>Resting Heart rate is normal";
                            //document.getElementById("curHealth").innerHTML = "Resting Heart rate is normal"
                        }*/

                        if (maxTemp>104){
                            l5.style.backgroundColor = "red";
                            flag = 1;
                            //curHealthMsg = curHealthMsg + "<br/>Temp is in more than 104F";
                            //document.getElementById("curHealth").innerHTML += "Temp is in more than 99.5F"
                        }
                        else if(minTemp<68){
                            l6.style.backgroundColor = "red";
                            flag = 1;
                            //curHealthMsg = curHealthMsg + "\r\nTemp is in below 68F";
                            //document.getElementById("curHealth").innerHTML += "Temp is in below 97.7F"
                        }
                        else{
                            l5.style.backgroundColor = "white";
                            l6.style.backgroundColor = "white";
                            //curHealthMsg = curHealthMsg + "<br/>Temp is in normal range";
                            //document.getElementById("curHealth").innerHTML = "Temp is normal"
                        }      
                        
                        if(obj.IR>=(220-parseInt(ageSet))){
                            curHealthMsg = curHealthMsg + "<br/><br/>Heart Rate according to your age is above the maximum heart rate (" + obj.IR + ")";
                            flag = 1;
                        }

                        if(obj.IR<=89){
                            curHealthMsg = curHealthMsg + "<br/><br/>Heart Rate range: Normal (" + obj.IR + ")";
                        }
                        else if(obj.IR<=110){
                            curHealthMsg = curHealthMsg + "<br/>Heart Rate range: Out of Zone (" + obj.IR + ")";
                        }
                        else if(obj.IR<=135){
                            curHealthMsg = curHealthMsg + "<br/>Heart Rate range: Fat Burn Zone (" + obj.IR + ")";
                        }
                        else if(obj.IR<=152){
                            curHealthMsg = curHealthMsg + "<br/>Heart Rate range: Cardio Zone (" + obj.IR + ")";
                        }
                        else{
                            curHealthMsg = curHealthMsg + "<br/>Heart Rate range: Peak Zone (" + obj.IR + ")";
                        }

                        if(obj.red<=68){
                            curHealthMsg = curHealthMsg + "<br/><br/>Temperature range: Warm up warning (" + obj.red + ")";
                        }
                        else if(obj.red>=104){
                            curHealthMsg = curHealthMsg + "<br/>Temperature range: Suggestion to see a doctor (" +  obj.red + ")";
                        }
                        else{
                            curHealthMsg = curHealthMsg + "<br/>Temperature range: Normal Range (" + obj.red + ")";
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
