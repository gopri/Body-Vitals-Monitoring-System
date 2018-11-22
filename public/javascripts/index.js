$(document).ready(function () {
                  var timeData = [],
                  intensityData = [],
                  threshold = 0,
                  defaultThreshold = 250,
                  initialValues = [],
                  setData = [],
                  repCount = 0,
                  repData = [];
                  var data = {
                  labels: timeData,
                  datasets: [
                             {
                             fill: false,
                             label: 'Intensity',
                             yAxisID: 'Peaks',
                             borderColor: "rgba(255, 204, 0, 1)",
                             pointBoarderColor: "rgba(255, 204, 0, 1)",
                             backgroundColor: "rgba(255, 204, 0, 0.4)",
                             pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                             pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                             data: intensityData
                             }
                             ]
                  }
                  
                  var data2 = {
                  labels: timeData,
                  datasets: [
                             {
                             fill: false,
                             label: 'Rep',
                             yAxisID: 'Rep',
                             borderColor: "rgba(255, 204, 0, 1)",
                             pointBoarderColor: "rgba(255, 204, 0, 1)",
                             backgroundColor: "rgba(255, 204, 0, 0.4)",
                             pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                             pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                             data: repData
                             }
                             ]
                  }
                  
                  var data3 = {
                  labels: timeData,
                  datasets: [
                             {
                             fill: false,
                             label: 'Set',
                             yAxisID: 'Set',
                             borderColor: "rgba(255, 204, 0, 1)",
                             pointBoarderColor: "rgba(255, 204, 0, 1)",
                             backgroundColor: "rgba(255, 204, 0, 0.4)",
                             pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                             pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                             data: setData
                             }
                             ]
                  }
                  
                  var basicOption3 = {
                  title: {
                  display: true,
                  text: 'Set Real-time Data',
                  fontSize: 36
                  },
                  scales: {
                  yAxes: [{
                          id: 'Set',
                          type: 'linear',
                          scaleLabel: {
                          labelString: 'Set',
                          display: true
                          },
                          position: 'left',
                          }]
                  }
                  }
                  
                  var basicOption2 = {
                  title: {
                  display: true,
                  text: 'Rep Real-time Data',
                  fontSize: 36
                  },
                  scales: {
                  yAxes: [{
                          id: 'Rep',
                          type: 'linear',
                          scaleLabel: {
                          labelString: 'Rep',
                          display: true
                          },
                          position: 'left',
                          }]
                  }
                  }
                  
                  var basicOption = {
                  title: {
                  display: true,
                  text: 'Intensity Real-time Data',
                  fontSize: 36
                  },
                  scales: {
                  yAxes: [{
                          id: 'Peaks',
                          type: 'linear',
                          scaleLabel: {
                          labelString: 'Intensity',
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
                                              type: 'bar',
                                              data: data2,
                                              options: basicOption2
                                              });
                  
                  var myLineChart3 = new Chart(ctx3, {
                                               type: 'bar',
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
                  var step = 0;
                 
                  if(obj.voltage>450){
                      step = 1;
                  }
                  
                  var flexCount = 0;
                  for(var i=0;i<repData.length;i++){
                      if(repData[i]==1){
                          flexCount++;
                      }
                  }
                  var avgSetsDone = flexCount/12;
                  
                  timeData.push(obj.time);

                  intensityData.push(obj.red);
                  /*if(obj.voltage>450){
                      intensityData.push(obj.voltage);
                  }else{
                      intensityData.push(450);
                  }*/
                  
                  repData.push(step);
                  setData.push(avgSetsDone);
                  // only keep no more than 50 points in the line chart
                  const maxLen = 50;
                  var len = timeData.length;
                  if (len > maxLen) {
                  timeData.shift();
                  intensityData.shift();
                  repData.shift();
                  setData.shift();
                  }
                  
                  myLineChart.update();
                  myLineChart2.update();
                  myLineChart3.update();
                  } catch (err) {
                  console.error(err);
                  }
                  }
});
