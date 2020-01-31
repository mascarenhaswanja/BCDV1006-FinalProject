function RandomHash(size) {
	var result = [];
    var AlphaNumber = "0123456789abcdefghijklmnopqrstuvxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
    for (var i = 0 ; i < size; i++) { 
    	var  index = AlphaNumber.length * Math.random();
      result.push(AlphaNumber.charAt(index));
    }
    return(result.join(""));
   // console.log(result.join(""));
}
var size = 32;
var tRun = 0;
var interval = setInterval(function(){
    tRun += 1;
    if(tRun === 100){
        clearInterval(interval);
    }
    document.getElementById("hash").innerHTML = RandomHash(size);
},30); 
