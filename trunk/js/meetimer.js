var hourlyRate = 0;
var hoursOfDay = 8;

var secondsPassed = 1;
var minutesPassed = 0;
var hoursPassed = 0;

$(document).ready(function() {
  window.setInterval("progressTimer()", 1000);
  $(".emptyseat").click(function() {
    alert("empty seat.");
  });
});

function progressTimer() {
  hourlyRate = hourlyRate + 100;
  $("#moneydisplay").html(hourlyRate);
  DoTimerTick(); 
}

function DoTimerTick() {
  var diffSec = secondsPassed++;
  
  if (diffSec == 60) {
      minutesPassed++;
      secondsPassed = 1;
      diffSec = 0;
  }
  var diffMins = minutesPassed;
  
  if (diffMins == 60) {
      hoursPassed++;
      minutesPassed = 0;
      diffMins = 0;
      diffSec = 0;
  }
  var diffHrs = hoursPassed;
  
  if (diffHrs <= 9) {
    diffHrs = "0" + diffHrs;
  }
  
  if (diffMins <= 9) {
    diffMins = "0" + diffMins;
  }
  
  if (diffSec <= 9) {
    diffSec = "0" + diffSec;
  }
  
  $("#seconddisplay").html(diffSec);
  $("#minutedisplay").html(diffMins);
  $("#hourdisplay").html(diffHrs);
}


function setLayout() {
  var height = window.innerHeight || document.documentElement.clientHeight;
  var width = window.innerWidth || document.documentElement.clientWidth;
  
  $("#grid").css("height", height);
  $("#grid").css("width", width);
  window.scrollTo(0,1);
}