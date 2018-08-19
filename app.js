const fs = require('fs');
const yargs = require('yargs');
const opn = require('opn');

 var start = new Date(Date.now()).getTime();
var current =  new Date(Date.now()).getTime();
var timer = Number.parseInt(yargs.argv['_'][0]);
var session = Number.parseInt(yargs.argv['_'][1]);
if(isNaN(timer)|| isNaN(session)){
  console.log("timer or session is not defined");
}
else{
console.log(timer);
var i=1;
var temp = timer-1;
var sec = 60;

var time = (timer,current,start,temp,sec,i) =>{
  while(current - start <=  timer * 60000){
    current =  new Date(Date.now()).getTime();
  if(current - start === 10000*i){
    i = i+1;
    sec = sec -10
    if(sec == 0){sec = 60;}
    if(sec == 60)
    {temp= temp-1;}
    console.log(temp," mins remaining", sec," second rem");
  }

  }

}
var j = 0;
while(j<session){
time(timer,current,start,temp,sec,i);
console.log("Times up");
opn('alarm-clock-01.wav');
console.log("Break Time");
time(5,new Date(Date.now()).getTime(),new Date(Date.now()).getTime(),4,60,1);
opn('alarm-clock-01.wav');
console.log("Break OVer");
j++;
}
}
