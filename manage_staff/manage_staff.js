
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
];

let staffInfoTable = document.querySelector("#staffInfoTable");
let exStaffInfoTable = document.querySelector("#exStaffInfoTable");
let addStaffQuery = document.querySelectorAll(".add-staff");
let exStaffQuery = document.querySelectorAll(".ex-staff");
let addStaffId = document.querySelectorAll("#add-staff");
let addManageStaff = document.querySelector('.addManageStaff');
let colorClass = document.querySelectorAll(".path");

let staffInfoResult = "", exStaffInfoResult = "";
function showStaffDataTable(){
    let staffInfoResult = ""
    staffData.forEach((item) => {
        staffInfoResult += `
        <tr>
            <td>${item.staffId}</td>
            <td><img src="${item.image}" alt=""></td>
            <td>${item.staffName}</td>
            <td>${item.role}</td>
            <td>${item.reportingTo}</td>
            <td>${item.workingSince}</td>
            <td>
            <a onclick="addStaffFun()"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">edit</span></a>
            <a onclick="window.location.href='./../manage_staff/staff_detail.html'" ><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">info</span></a>
            </td>
        </tr>
        `
    })
    if (staffInfoTable != null) {
        staffInfoTable.innerHTML = staffInfoResult;
    }
}

function showExStaffDataTable(){
    // let exStaffInfoTable = document.querySelector("#exStaffInfoTable");
    let exStaffInfoResult = "";
    exStaffData.forEach((item) => {
        exStaffInfoResult += `
        <tr>
            <td>${item.staffId}</td>
            <td><img src="${item.image}" alt=""></td>
            <td>${item.staffName}</td>
            <td>${item.role}</td>
            <td>${item.workingFrom}</td>
            <td>${item.workingto}</td>
            <td>
            <a onclick="window.location.href='./../manage_staff/staff_detail.html'" ><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">info</span></a>
            </td>
        </tr>
        `
    })
    if (exStaffInfoTable != null) {
        exStaffInfoTable.innerHTML = exStaffInfoResult;
    }
}

var isAsceStaffId = true;
function sortStaffId(e){
  const { data, asce }  = showHideSortIcon(e, isAsceStaffId, staffData, "staffId");
  staffData = data;
  isAsceStaffId = asce;
  showStaffDataTable();
}
var isAsceStaffName = true;
function sortStaffName(e){
  const { data, asce }  = showHideSortIcon(e, isAsceStaffName, staffData, "staffName");
  staffData = data;
  isAsceStaffName = asce;
  showStaffDataTable();
}
var isAsceStaffRole = true;
function sortStaffRole(e){
  const { data, asce }  = showHideSortIcon(e, isAsceStaffRole, staffData, "role");
  staffData = data;
  isAsceStaffRole = asce;
  showStaffDataTable();
}
var isAsceReportingTo = true;
function sortReportingTo(e){
  const { data, asce }  = showHideSortIcon(e, isAsceReportingTo, staffData, "reportingTo");
  staffData = data;
  isAsceReportingTo = asce;
  showStaffDataTable();
}
var isAsceExStaffId = true;
function sortExStaffId(e){
  const { data, asce }  = showHideSortIcon(e, isAsceExStaffId, exStaffData, "staffId");
  exStaffData = data;
  isAsceExStaffId = asce;
  showExStaffDataTable();
}
var isAsceExStaffName = true;
function sortExStaffName(e){
  const { data, asce }  = showHideSortIcon(e, isAsceExStaffName, exStaffData, "staffName");
  exStaffData = data;
  isAsceExStaffName = asce;
  showExStaffDataTable();
}
var isAsceExStaffRole = true;
function sortExStaffRole(e){
  const { data, asce }  = showHideSortIcon(e, isAsceExStaffRole, exStaffData, "role");
  exStaffData = data;
  isAsceExStaffRole = asce;
  showExStaffDataTable();
}
var isAsceExStaffWorkingFrom = true;
function sortExStaffWorkingFrom(e){
  const { data, asce }  = showHideSortIcon(e, isAsceExStaffWorkingFrom, exStaffData, "workingFrom");
  exStaffData = data;
  isAsceExStaffWorkingFrom = asce;
  showExStaffDataTable();
}
showStaffDataTable();
showExStaffDataTable();



function addStaffFun() {
    addStaffQuery.forEach((item) => {
        item.classList.toggle("disp-none");
        addManageStaff.classList.add('disp-none');
    })
    // addStaffId.classList.toggle("disp-none");
    colorClass.forEach((item) => {
        item.classList.toggle("black");
    })
}

function exStaff() {    
    // isAccName = true;
    // isAccRole = true;
    // isAccReportingTo= true;
//    exStaffInfoTable.innerHTML=''
//    let exStaffInfoResult=  display(exStaffData,'exStaff');
  exStaffQuery.forEach((item) => {
    item.classList.toggle("disp-none");
    addStaffId[0].classList.toggle("disp-none");
    })  
    
    // exStaffInfoTable.innerHTML = exStaffInfoResult;

    colorClass.forEach((item) => {
        item.classList.toggle("black");
    })
}
{/* <script src="../../manage_food/food_item/items.js"></script> */}


