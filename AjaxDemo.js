// Ajax
// Lets File IO and things like that to happen asynchronously
// You don't have to wait for the task to finish in order 
// to continue interacting with the website


// Load from a txt file using Ajax
function loadDoc(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(this.readyState);
    };

    if (this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = xhr.responseText;
    }

    
    xhr.open("GET", "/hello.txt");
    xhr.send();
}