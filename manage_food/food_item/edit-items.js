"use strict"


const urlParams = new URLSearchParams(window.location.search);
const operation = urlParams.get('operation');
if (operation === 'delete') {
  del.click()
}





//Dropdown Notification 

const ddNotifiCount = document.querySelector('.notify-count');
const ddNotification = document.querySelector('.notify-dropdown');

ddNotifiCount.addEventListener('click', function() {
  if(document.querySelector('.notify-comment').style.display === "none") {

    ddNotification.style.boxShadow = "-10px 16px 25px 0px #DDDDDD";
    document.querySelector('.notify-comment').style.display = "block";
  } else {
    ddNotification.style.boxShadow = "none";
    document.querySelector('.notify-comment').style.display = "none";
  }
});
