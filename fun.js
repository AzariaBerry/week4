/*done in codepen to check if works*/ 

/* global scope at the top */
var spongebob = "Im a goofy goober yeah";

spongebob = " IM A GOOFY GOOBER YEAH!!";

function awesomeLevel(awesomeness, coolness, goofyGoober) {
    var totalAwesomeLevel = awesomeness + coolness + goofyGoober;
    return totalAwesomeLevel;
}

console.log("your total awesome level is: " + awesomeLevel(100, 200, 2000) + spongebob);



var spongebob=5
var patrick=8
function add (spongebob, patrick){
}
console.log(spongebob + patrick);


function multiply (spongebob,patrick){
    var goofyGoober= spongebob * patrick;
        console.log(goofyGoober)
    return goofyGoober;
}
    multiply(2,5);

/*In the function below Changing the ++ to -- will make a infinite loop that will freeze browser tab */
/*switching lame and awesome around in the for loop does nothing. I assumed it would count backwards */
function zeroToOneHundred(lame,awesome){
    for(lame; lame<= awesome; lame ++){
        console.log(lame)
    }
}

zeroToOneHundred(0,100);

(function () {
    alert("Congrats you did it! You made a IIEF!");
})();


function coolnessAlert() {
    prompt("Are you a Goofy Goober?");
}

coolnessAlert();
