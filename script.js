console.log('hello')
$(document).ready(showDay)
var d = new Date();
var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

console.log('hello')
function showDay() {
    var n = weekday[d.getDay()];
    console.log(n)
    $('#day').text(`Today is ${n}`)
    timeBlocks()
}

function timeBlocks() {
    currentHour()
    console.log('timeBlocks')
    blocks = [9,10,11,12,1,2,3,4,5,]
    console.log(blocks.block_1)

    blocks.forEach(element => {
       var blockDiv = 
       document.createElement('div')
        
       //$//('#block').createElement('div')
       //blockDiv.innerHTML(element)
       //$('#block').appendChild(blockDiv)
        
    });
  function currentHour() {
   var hour = d.getHours()
   console.log(hour)

   //grab value of block item 
  var value = $("#9").val()
  console.log(value);

  }

    
    
    

}
