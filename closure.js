// Closure means a function binds together with its lexicle envoirnment

/* A closure is the combination of the function bundle together (enclosed)
 with reference to its surrounding state
*/

// v1

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}

x();

// o/p : 7



// v2

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);

z();


/*
o/p :
function y(){
    console.log(a);
}
7
*/

// v3

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z);
z();


/*
o/p :
function y(){
    console.log(a);
}
100
*/


// v4

function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();        
    }
    x();
}
z();

//o/p: 7  900

