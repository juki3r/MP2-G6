
// -------------------- DATE and TIME Function --------------------
let time = document.getElementById('time');
let date = document.getElementById('date');
setInterval(function(){
    time.innerHTML = new Date().toLocaleTimeString();
    date.innerHTML = new Date().toLocaleDateString();
},1000)

// Text-speech
var msg = new SpeechSynthesisUtterance();


// ---------------Lights -----------------------------------------------------------------------------------------------------------------------------------------
//Bedroom - 1
var room1bulb_status = document.getElementById('room1bulb');
function room1light() {   
    if (room1bulb_status.src.match("bulbon")) {
        room1bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_1_light_switch', 'OFF');
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 1 light is turned off \n'
        msg.text = "Bedroom 1 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room1bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_1_light_switch', 'ON');
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 1 light is turned on \n'
            msg.text = "Bedroom 1 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_1_light_switch') == null) || (localStorage.getItem('room_1_light_switch') == 'OFF')){
        room1bulb_status.src = "images/pic_bulboff.gif";
            }else{
                room1bulb_status.src = "images/pic_bulbon.gif";
            }
 //Bedroom - 2
var room2bulb_status = document.getElementById('room2bulb');
function room2light() {   
    if (room2bulb_status.src.match("bulbon")) {
        room2bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_2_light_switch', 'OFF');
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 2 light is turned off \n'
        msg.text = "Bedroom 2 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room2bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_2_light_switch', 'ON');
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 2 light is turned on \n'
            msg.text = "Bedroom 2 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_2_light_switch') == null) || (localStorage.getItem('room_2_light_switch') == 'OFF')){
        room2bulb_status.src = "images/pic_bulboff.gif";
            }else{
                room2bulb_status.src = "images/pic_bulbon.gif";
            }
 //Bedroom - 3
var room3bulb_status = document.getElementById('room3bulb');
function room3light() {   
    if (room3bulb_status.src.match("bulbon")) {
        room3bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_3_light_switch', 'OFF');
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 3 light is turned off \n'
        msg.text = "Bedroom 3 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room3bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_3_light_switch', 'ON');
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 3 light is turned on \n'
            msg.text = "Bedroom 3 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_3_light_switch') == null) || (localStorage.getItem('room_3_light_switch') == 'OFF')){
        room3bulb_status.src = "images/pic_bulboff.gif";
            }else{
                room3bulb_status.src = "images/pic_bulbon.gif";
            }
 //Living room
 var livingroombulb_status = document.getElementById('livingroombulb');
 function livingroomlight() {   
     if(livingroombulb_status.src.match("bulbon")) {
         livingroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('livingroom_light_switch', 'OFF');
         textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Living room light is turned off \n'
         msg.text = "Living room light is off";
         window.speechSynthesis.speak(msg);
         } else {
             livingroombulb_status.src = "images/pic_bulbon.gif";
             localStorage.setItem('livingroom_light_switch', 'ON');
             textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Living room light is turned on \n'
             msg.text = "Living room light is on";
             window.speechSynthesis.speak(msg);
             }
 }
 if((localStorage.getItem('livingroom_light_switch') == null) || (localStorage.getItem('livingroom_light_switch') == 'OFF')){
         livingroombulb_status.src = "images/pic_bulboff.gif";
             }else{
                 livingroombulb_status.src = "images/pic_bulbon.gif";
             }
 //Kitchen room
 var kitchenroombulb_status = document.getElementById('kitchenroombulb');
 function kitchenroomlight() {   
     if(kitchenroombulb_status.src.match("bulbon")) {
         kitchenroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('kitchenroom_light_switch', 'OFF');
         textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Kitchen room light is turned off \n'
         msg.text = "Kitchen room light is off";
         window.speechSynthesis.speak(msg);
         } else {
             kitchenroombulb_status.src = "images/pic_bulbon.gif";
             localStorage.setItem('kitchenroom_light_switch', 'ON');
             textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Kitchen room light is turned on \n'
             msg.text = "Kitchen room light is on";
             window.speechSynthesis.speak(msg);
             }
 }
 if((localStorage.getItem('kitchenroom_light_switch') == null) || (localStorage.getItem('kitchenroom_light_switch') == 'OFF')){
         kitchenroombulb_status.src = "images/pic_bulboff.gif";
             }else{
                 kitchenroombulb_status.src = "images/pic_bulbon.gif";
             }
//Front Yard
var frontyardbulb_status = document.getElementById('frontyardbulb');
function frontyardlight(){   
    if(frontyardbulb_status.src.match("bulbon")) {
        frontyardbulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('frontyard_light_switch', 'OFF');
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front yard light is turned off \n'
        msg.text = "Front yard light is off";
        window.speechSynthesis.speak(msg);
        } else {
            frontyardbulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('frontyard_light_switch', 'ON');
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front yard light is turned on \n'
            msg.text = "Front yard light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('frontyard_light_switch') == null) || (localStorage.getItem('frontyard_light_switch') == 'OFF')){
        frontyardbulb_status.src = "images/pic_bulboff.gif";
            }else{
                frontyardbulb_status.src = "images/pic_bulbon.gif";
            }
//Back Yard
var backyardbulb_status = document.getElementById('backyardbulb');
function backyardlight(){   
    if(backyardbulb_status.src.match("bulbon")) {
        backyardbulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('backyard_light_switch', 'OFF');
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back yard light is turned off \n';
        msg.text = "Back yard light is off";
        window.speechSynthesis.speak(msg);
        
        } else {
            backyardbulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('backyard_light_switch', 'ON');
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back yard light is turned on \n';
            msg.text = "Back yard light is on";
            window.speechSynthesis.speak(msg);
            
            }
}
if((localStorage.getItem('backyard_light_switch') == null) || (localStorage.getItem('backyard_light_switch') == 'OFF')){
        backyardbulb_status.src = "images/pic_bulboff.gif";
            }else{
                backyardbulb_status.src = "images/pic_bulbon.gif";
            }


//Getting all Logs to be displayed
//Using Stack method to push new logs into LocalStorage to be extract and use
let textarea = document.getElementById('logs');
textarea.value = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + ' ->System up and running. \n'


// ------------------ Graph Energy Monitor -------------------------------

let current_status;
let voltage_value;
let current_value;
let kwh_value;
var myChart = document.getElementById('myChart');
var EnergyChart = new Chart("myChart", {
  type: "line",
  data: {
    labels: ['VOLTAGE','CURRENT','KWH'],
    datasets: [{
      backgroundColor: ['green', 'red', 'blue'],
      data: [220, current_status, 30]
    }]
  },
  options: {
    legend: {display: false},
    tooltips: {enabled: false},
    hover: {mode: null},
    title: {
      display: true,
      text: "Live Power Monitoring"
    }
  }
});

// ------------------------- Status Monitoring Power Calculation -------------

setInterval(function(){
    if((room1bulb_status.src.match("bulbon")) && (room2bulb_status.src.match("bulbon")) && (room3bulb_status.src.match("bulbon")) && 
            (livingroombulb_status.src) && (kitchenroombulb_status.src) && (frontyardbulb_status.src) 
                && (backyardbulb_status.src.match("bulbon"))){
        current_status = 100;
        EnergyChart.data.datasets[0].data[2] += 1.05;
    }
    else{
        current_status = 200;   
    }
   
    EnergyChart.data.datasets[0].data[1] = current_status;
    EnergyChart.update();
    document.getElementById('voltage').innerHTML = EnergyChart.data.datasets[0].data[0];
    document.getElementById('ampere').innerHTML = current_status;
    document.getElementById('kwh').innerHTML = Math.round(EnergyChart.data.datasets[0].data[2]);
},1000);




