// basic information about the dapp

var uri = 'https://mewapi.epool.io';
var web3 = new Web3(new Web3.providers.HttpProvider(uri));
var currentblk = web3.eth.blockNumber;

if ( currentblk <= 5000000 ) {
    var currentEra = 5000000;
    var timeRemains = (5000000 - currentblk) * 14.5;
  }

if (currentblk >= 5000000){
    var currentEra = 10000000;
    var timeRemains = (10000000 - currentblk) * 14.5;
    document.getElementById("era2-block").style.visibility = "visible";
}

//set date time
var countDownDate = ( timeRemains * 1000 )  + 604800 + new Date().getTime();
var progress = (100-((5000001 - currentblk) / 5000000) * 100);
var real = new Date(countDownDate);
document.getElementById("realDate").innerHTML =  formatDate(real);

//setup the progress bars
function doGetBlk() {

   //get the current block from the web3 provider
   currentblk = web3.eth.blockNumber;
   //var currentblk = 7000000;
   //var currentEra = 10000000;
   
    // average blocktime is 14 secs
   timeRemains = (currentEra - currentblk) * 14.25;
   
  //first era stuff
   progress = (100-((5000000 - currentblk) / 5000000) * 100);
   if(currentEra < 5000001){
	   $('#currentBlock').html(currentblk+"/"+5000001);
   } else {
	   $('#currentBlock').html(5000001 +"/"+5000001);
   }
   document.getElementById('era-1').style.width = progress+"%";

   //second era stuffs
   progress2 = (100-(((10000000 + 1) - (currentblk / 10000000) * 100);
   if(currentEra < 10000001){
	      $('#currentBlock2').html(currentblk + "/" + 10000000);;
   } else {
	      $('#currentBlock').html(10000001 +"/"+10000001);
   }
  document.getElementById('era-2').style.width = progress2+"%";
}

window.onload = function() {
  var getBlk = setInterval( doGetBlk, 5000 );
  
  <!-- Countdown Timer -->
  // Set the date we're counting down to

// Update the count down every 1 second
  var x = setInterval( function() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor( distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor( ( distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
// Display the result in the element with id="demo"
    document.getElementById("day-val").innerHTML =  days;
    document.getElementById("hour-val").innerHTML =  hours;
    document.getElementById("minute-val").innerHTML =  minutes;
    document.getElementById("second-val").innerHTML =  seconds;

  // If the count down is finished, write some text
    if (distance < 0) {
	    clearInterval(x);
    	    document.getElementById("demo").innerHTML = "Processing";
     }
	  
  }, 1000);
};

function formatDate(date) {
  var monthNames = [
    "January [一月]", "February [二月]", "March [三月]",
    "April [四月]", "May [五月]", "June [六月]", "July [七月]",
    "August [八月]", "September [九月]", "October [十月]",
    "November [十一月]", "December [十二月]"
  ];
  var dayNames = [
    "Sunday [星期天]",
    "Monday [星期一]",
    "Tuesday [星期二]",
    "Wednesday [星期三]",
    "Thursday [星期四]",
    "Friday [星期五]",
    "Saturday [星期六]"
  ]

  var weekday = date.getDay();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return dayNames[weekday] +"  - " + day + ' ' + monthNames[monthIndex] + ' ' + year;
}
