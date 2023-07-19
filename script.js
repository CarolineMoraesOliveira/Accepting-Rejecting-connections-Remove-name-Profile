console.log('Running main.js');

var badge = 2;
var totalBadge = document.querySelector('#badge1');
var increaseConnection = 500;
var totalIncrease = document.querySelector('#badge2');
var changeProfile = document.querySelector('#changeProfile');

function removeBadge(){
    if (badge >0) {
        badge--;
        increaseConnection++;
    totalBadge.innerHTML = badge;
    totalIncrease.innerHTML = increaseConnection;
}
}
function removeBadge1(x){
    if (badge >0) {
        badge--;
    totalBadge.innerHTML = badge;
}
}
function changeName(){ 
    changeProfile.innerHTML = "Caroline Oliveira";
}
