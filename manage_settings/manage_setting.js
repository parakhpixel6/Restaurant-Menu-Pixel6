
"use strict"

let couponData = [
    {couponCode:"GET10", description:"Place order above ₹3000 and get discount up to 10%", discount:"10%", validFrom:"25/05/2023", validTill:"25/06/2023", applicableOn:"All", status:"Active"},
    {couponCode:"GET100", description:"Buy any Beverages from menu and get ₹100 off ", discount:"₹100", validFrom:"21/05/2023", validTill:"30/06/2023", applicableOn:"Selected items", status:"Expired"},
    {couponCode:"BB15", description:"Get 15% off on most recommended dish -Breakfast Burrito", discount:"₹100", validFrom:"19/05/2023", validTill:"25/05/2023", applicableOn:"Selected items", status:"Active"},
    {couponCode:"GET10", description:"Buy any Beverages from menu and get ₹100 off ", discount:"₹100", validFrom:"12/05/2023", validTill:"10/08/2023", applicableOn:"Selected items", status:"Active"},
]

let calenderData = [
    {date:"19/05/2023", day:"Monday", openTime:"11:00 AM", closeTime:"01:00 PM", status:"Open"},
    {date:"20/05/2023", day:"Tuesday", openTime:"11:00 AM", closeTime:"01:00 PM", status:"Open"},
    {date:"21/05/2023", day:"Wednesday", openTime:"11:00 AM", closeTime:"01:00 PM", status:"Open"},
    {date:"23/05/2023", day:"Thursday", openTime:"11:00 AM", closeTime:"01:00 PM", status:"Open"},
    {date:"24/05/2023", day:"Friday", openTime:"11:00 AM", closeTime:"01:00 PM", status:"Closed"},
    {date:"25/05/2023", day:"Saturday", openTime:"11:00 AM", closeTime:"01:00 PM", status:"Open"},
    {date:"26/05/2023", day:"Sunday", openTime:"11:00 AM", closeTime:"01:00 PM", status:"Open"},
]
let addCouponquery = document.querySelectorAll(".add-coupon");
let colorClass = document.querySelector(".path");
let result = "", calender = "";

function showCalenderDataTable()
{
let calenderTable = document.querySelector("#calenderTable");
let  calender = "";
calenderData.forEach((item) => {
    calender += `
    <tr>
        <td>${item.date}</td>
        <td>${item.day}</td>
        <td>${item.openTime}</td>
        <td>${item.closeTime}</td>
        <td>${item.status}</td>
        <td>
        <a onclick="popIt()"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">edit</span></a>
        </td>
    </tr>
    `
})
// if (discountCouponTable != null) {
//     discountCouponTable.innerHTML = result;
// }
 if (calenderTable != null) {
    calenderTable.innerHTML = calender;
}
}

function showCouponDataTable(){
    let discountCouponTable = document.querySelector("#discountCouponTable");
    let result = "";
    couponData.forEach((item) => {
        result += `
        <tr>
            <td>${item.couponCode}</td>
            <td>${item.description}</td>
            <td>${item.discount}</td>
            <td>${item.validFrom}</td>
            <td>${item.validTill}</td>
            <td>${item.applicableOn}</td>
            <td>${item.status}</td>
            <td>
            <a onclick="addCouponFun()"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">edit</span></a>
            <a onclick="popIt()"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">Delete</span></a>
            </td>
        </tr>
        `
    })
    if (discountCouponTable != null) {
        discountCouponTable.innerHTML = result;
    }
    // else if (calenderTable != null) {
    //     calenderTable.innerHTML = calender;
    // }

}
var isAsceCalenderStatus = true;
function sortCalenderStatus(e){
  const { data, asce }  = showHideSortIcon(e, isAsceCalenderStatus, calenderData, "status");
  calenderData = data;
  isAsceCalenderStatus = asce;
  showCalenderDataTable();
}

var isAsceCouponStatus = true;
function sortCouponDataStatus(e){
  const { data, asce }  = showHideSortIcon(e, isAsceCouponStatus, couponData, "status");
  couponData = data;
  isAsceCouponStatus = asce;
  showCouponDataTable();
}

showCouponDataTable();
showCalenderDataTable();

function addCouponFun() {
    addCouponquery.forEach((item) => {
        item.classList.toggle("disp-none");
    })
    console.log(colorClass);
    colorClass.classList.toggle("black")
}

//Dropdown Notification 

// const ddNotifiCount = document.querySelector('.notify-count');
// const ddNotification = document.querySelector('.notify-dropdown');

// ddNotifiCount.addEventListener('click', function() {
//   if(document.querySelector('.notify-comment').style.display === "none") {

//     ddNotification.style.boxShadow = "-10px 16px 25px 0px #DDDDDD";
//     document.querySelector('.notify-comment').style.display = "block";
//   } else {
//     ddNotification.style.boxShadow = "none";
//     document.querySelector('.notify-comment').style.display = "none";
//   }
// });

