
"use strict"

let staffData = [
    {staffId:"S001", image:"../assets/images/img/staff/admin.png", staffName:"Rajendra Singh", role:"Admin", reportingTo:"N/A", workingSince:"21 Jun 2020"},
    {staffId:"S002", image:"../assets/images/img/staff/manager.png", staffName:"Jaydeep Sivakumar", role:"Manager", reportingTo:"Ajay Rathod", workingSince:"28 May 2021"},
    {staffId:"S003", image:"../assets/images/img/staff/captain.png", staffName:"Ekta Tiwari", role:"Captain", reportingTo:"Jaydeep Sivakumar", workingSince:"14 May 2021"},
    {staffId:"S004", image:"../assets/images/img/staff/server.png", staffName:"Naresh Chavan", role:"Server", reportingTo:"Jaydeep Sivakumar", workingSince:"02 Jun 2020"}
]

let exStaffData = [
    {staffId:"S001", image:"../assets/images/img/staff/admin.png", staffName:"Rajendra Singh", role:"Admin", workingFrom:"N/A", workingto:"21 Jun 2020"},
    {staffId:"S002", image:"../assets/images/img/staff/manager.png", staffName:"Jaydeep Sivakumar", role:"Manager", workingFrom:"Ajay Rathod", workingto:"28 May 2021"},
    {staffId:"S003", image:"../assets/images/img/staff/captain.png", staffName:"Ekta Tiwari", role:"Captain", workingFrom:"Jaydeep Sivakumar", workingto:"14 May 2021"},
    {staffId:"S004", image:"../assets/images/img/staff/server.png", staffName:"Naresh Chavan", role:"Server", workingFrom:"Jaydeep Sivakumar", workingto:"02 Jun 2020"}
]

let staffInfoTable = document.querySelector("#staffInfoTable");
let exStaffInfoTable = document.querySelector("#exStaffInfoTable");
let addStaffQuery = document.querySelectorAll(".add-staff");
let exStaffQuery = document.querySelectorAll(".ex-staff");
let addStaffId = document.querySelectorAll("#add-staff");
let addManageStaff = document.querySelector('.addManageStaff');
// let exStaffId = document.querySelectorAll("#ex-staff");
let staffInfoResult = "",
    exStaffInfoResult = "";

staffData.forEach((item) => {
    staffInfoResult += `
    <tr>
        <td>${item.staffId}</td>
        <td><img src="${item.image}" alt=""></td>
        <td>${item.staffName}</td>
        <td>${item.role}</td>
        <td>${item.reportingTo}</td>
        <td>${item.workingSince}</td>
        <td><img class="past-order-view-btn" onclick="addStaffFun()" src="../../assets/images/icons/edit.svg" alt=""> <img onclick="popIt()"  class="past-order-view-btn" src="../../assets/images/icons/delete.svg" alt=""></td>
    </tr>
    `
})

exStaffData.forEach((item) => {
    exStaffInfoResult += `
    <tr>
        <td>${item.staffId}</td>
        <td><img src="${item.image}" alt=""></td>
        <td>${item.staffName}</td>
        <td>${item.role}</td>
        <td>${item.workingFrom}</td>
        <td>${item.workingto}</td>
<td><img class="past-order-view-btn" onclick="addStaffFun() src="../../assets/images/icons/edit.svg" alt=""> <img onclick="popIt()" class="past-order-view-btn" src="../../assets/images/icons/delete.svg"  alt=""></td>
    </tr>
    `
})

if (staffInfoTable != null) {
    staffInfoTable.innerHTML = staffInfoResult;
}



function addStaffFun() {
    addStaffQuery.forEach((item) => {
        item.classList.toggle("disp-none");
        addManageStaff.classList.add('disp-none');
    })
    // addStaffId.classList.toggle("disp-none");
}


function exStaff() {
    // addStaffQuery.forEach((item) => {
        //     item.classList.toggle("disp-none")
        // })
    addStaffId[0].classList.toggle("disp-none");
    exStaffInfoTable.innerHTML = exStaffInfoResult;

    exStaffQuery.forEach((item) => {
        item.classList.toggle("disp-none");
    })
}
{/* <script src="../../manage_food/food_item/items.js"></script> */}