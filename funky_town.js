var fibonacci = function(n){

    if(n == 1 || n == 2){
	return 1;
    }

    else{
	return fibonacci(n-1) + fibonacci(n-2);
    }
}

var gcd = function(a,b){

    var max = 0;
    for(var i = 0;i<=Math.min(a,b);i++){
	if(((a % i == 0) && (b % i == 0)) && (i > max)){
	    max = i;
	}
    }
    return max;

}

var list = ['anna','dave','ethan','kelly','julian','martha'];
var randomStudent = function(){

    var randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}
