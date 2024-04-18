var counterElement = document.getElementById('counter').innerHTML;
var counterInt = parseInt(counterElement);

function increment() {
    var counterClicks = counterInt=counterInt+1;
    document.getElementById('counter').innerHTML = counterClicks;
    var sentenceUpdate = document.createElement('p');
    sentenceUpdate.innerHTML = `The counter has been increased by 1.`
    document.getElementById('counterLogs').appendChild(sentenceUpdate);
}


function decrement() {
    var counterClicks = counterInt=counterInt-1;
    document.getElementById('counter').innerHTML = counterClicks;
    
    var sentenceUpdate = document.createElement('p');
    sentenceUpdate.innerHTML = `The counter has been decreased by 1.`

    document.getElementById('counterLogs').appendChild(sentenceUpdate);
}


function reset() {
    document.getElementById('counter').innerHTML = "0";

    var sentenceUpdate2 = document.createElement('p');
    sentenceUpdate2.innerHTML =  `The counter has been reset.`
   
    document.getElementById('counterLogs').appendChild(sentenceUpdate2);
}