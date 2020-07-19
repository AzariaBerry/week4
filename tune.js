var array = [];

function songRequest() {
//pushes what ever is typed for song request into the array
    array.push(document.getElementById("userRequest").value + "<br>");
//displays whatever song is requested in the html
    var Requests = document.getElementById("userRequest").value;
//the songs requested will also display in the array
    document.getElementById("song").innerHTML = array;
    console.log(array);
}
