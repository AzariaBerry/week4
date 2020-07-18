var array = [];

function songRequest() {

    array.push(document.getElementById("userRequest").value + "<br>");
    var Requests = document.getElementById("userRequest").value;
    document.getElementById("song").innerHTML = array;
    console.log(array);
}
