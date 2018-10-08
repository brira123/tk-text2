// write your JS code here
let msg = "";
function txt(letter) {
    // let inpEl = document.querySelector("input");
    // inpEl.innerHTML += document.querySelector(".key")
    console.log(letter);
    msg+=letter;
    console.log(msg);
    document.querySelector("#input").innerHTML=msg;
}
function sent() {
    alert("message sent!");
}
