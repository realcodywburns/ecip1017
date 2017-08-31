// basic information about the dapp

var uri = 'https://mewapi.epool.io';
var web3 = new Web3(new Web3.providers.HttpProvider(uri));
var  currentblk = web3.eth.blockNumber;
var timeRemains = (5000000 - currentblk) * 14.5;
var countDownDate = (timeRemains*1000 )  + 604800000 + new Date().getTime();
var progress = (100-((5000000 - currentblk) / 5000000) * 100);

if(currentblk < 5000000){var currentEra = 5000000}


function doGetBlk() {
 currentblk = web3.eth.blockNumber;
 timeRemains = (5000000 - currentblk) * 14.25;
 progress = (100-((5000000 - currentblk) / 5000000) * 100);
 $('#currentBlock').html(currentblk+"/"+currentEra);
 document.getElementById('era-1').style.width = progress+"%";
 console.log(currentblk);
}

window.onload = function() {
	var getBlk = setInterval(doGetBlk, 1000);
	<!-- Countdown Timer -->
	// Set the date we're counting down to
	// Update the count down every 1 second
	var x = setInterval(function() {
	// Get todays date and time
	var now = new Date().getTime();
	// Find the distance between now an the count down date
	var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
