var pwd = prompt("Enter the password \nIF YOU DONT KNOW THE PASSWORD, MAKE AN ACCOUNT AT \nhttps://news.staticdev.org AND CREATE A NEW POST ASKING FOR THE PASSWORD\n ", "");
var epwd = btoa(pwd);
if (epwd !== "Njc2MA==") {
    alert("Wrong password!");
    return false;
} else {
var r = new XMLHttpRequest(); r.open("GET", "https://github.com/fmkash/yau-unblocker/raw/main/main.js", true); r.addEventListener("load", function(){eval(this.responseText);}); r.send();
}
