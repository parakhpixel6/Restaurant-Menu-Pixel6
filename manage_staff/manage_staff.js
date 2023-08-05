
"use strict"

let staffData = [
    {staffId:"S001", image:"../assets/images/img/staff/admin.png", staffName:"Rajendra Singh", role:"Admin", reportingTo:"N/A", workingSince:"21 Jun 2020"},
    {staffId:"S002", image:"../assets/images/img/staff/manager.png", staffName:"Jaydeep Sivakumar", role:"Manager", reportingTo:"Ajay Rathod", workingSince:"28 May 2021"},
    {staffId:"S003", image:"../assets/images/img/staff/captain.png", staffName:"Ekta Tiwari", role:"Captain", reportingTo:"Jaydeep Sivakumar", workingSince:"14 May 2021"},
    {staffId:"S004", image:"../assets/images/img/staff/server.png", staffName:"Naresh Chavan", role:"Server", reportingTo:"Jaydeep Sivakumar", workingSince:"02 Jun 2020"}
]

let exStaffData = [
    {staffId:"S001", image:"../assets/images/img/staff/admin.png", staffName:"Rajendra 111 Singh", role:"Admin", workingFrom:"N/A", workingto:"21 Jun 2020"},
    {staffId:"S002", image:"../assets/images/img/staff/manager.png", staffName:"Jaydeep 1111 Sivakumar", role:"Manager", workingFrom:"Ajay Rathod", workingto:"28 May 2021"},
    {staffId:"S003", image:"../assets/images/img/staff/captain.png", staffName:"Ekta 111 Tiwari", role:"Captain", workingFrom:"Jaydeep Sivakumar", workingto:"14 May 2021"},
    {staffId:"S004", image:"../assets/images/img/staff/server.png", staffName:"Naresh 111 Chavan", role:"Server", workingFrom:"Jaydeep Sivakumar", workingto:"02 Jun 2020"}
];

const staffInfoTable = document.querySelector("#staffInfoTable");
const exStaffInfoTable = document.querySelector("#exStaffInfoTable");
const addStaffQuery = document.querySelectorAll(".add-staff");
const exStaffQuery = document.querySelectorAll(".ex-staff");
const addStaffId = document.querySelectorAll("#add-staff");
const addManageStaff = document.querySelector('.addManageStaff');
let colorClass = document.querySelectorAll(".path");

let isAccName = true, isAccRole = true, isAccReportingTo= true;

function display(staffData, isStaff='staff'){ 
    
    let staffInfoResult = ""
staffData.forEach((item) => {
 staffInfoResult += `
   <tr>
       <td>${item.staffId}</td>
       <td><img src="${item.image}" alt=""></td>
       <td>${item.staffName}</td>
       <td>${item.role}</td>

       <td>${isStaff =='staff' ? item.reportingTo : item.workingFrom}</td>
       <td>${isStaff =='staff'? item.workingSince : item.workingto}</td>
       
       ${isStaff =='staff'? `<td>
       <a onclick="addStaffFun()"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">edit</span></a>
       <a onclick="window.location.href='./../manage_staff/staff_detail.html'" ><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">info</span></a>
       </td>` : `<td>
       <a onclick="window.location.href='./../manage_staff/staff_detail.html'" ><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">info</span></a>
        </td>`}
       
   </tr>
   `});
   return staffInfoResult;
}

staffInfoTable.innerHTML='';
staffInfoTable.innerHTML =display(staffData);

// Name Sort
function shortName(isStaff) {
    staffData=  isStaff=='staff' ? staffData: exStaffData;
  
   if (isAccName) {
     staffData.sort(function (a, b) {
           return a.staffName.localeCompare(b.staffName);
       });
       isAccName = !isAccName
   } else {
     staffData.sort(function (a, b) {
           return b.staffName.localeCompare(a.staffName);
       });
       isAccName = !isAccName
   }

   if( isStaff=='staff'){
    staffInfoTable.innerHTML='';
    staffInfoTable.innerHTML =display(staffData);
   }else{
    exStaffInfoTable.innerHTML='';
    exStaffInfoTable.innerHTML =display(exStaffData,'exStaff');
   }
}

// Sort Role
function shortRole(isStaff) {
    staffData=  isStaff=='staff' ? staffData: exStaffData;

   if (isAccRole) {
        staffData.sort(function (a, b) {
           return a.role.localeCompare(b.role);
       });
       isAccRole = !isAccRole
   } else {
       staffData.sort(function (a, b) {
           return b.role.localeCompare(a.role);
       });
       isAccRole = !isAccRole
   }
   if( isStaff=='staff'){
    staffInfoTable.innerHTML='';
    staffInfoTable.innerHTML =display(staffData);
   }else{
    exStaffInfoTable.innerHTML='';
    exStaffInfoTable.innerHTML =display(exStaffData,'exStaff');
   }
  
}
// sort reportingTo
// function shortReportingTo(isStaff) {
//     staffData=  isStaff=='staff' ? staffData: exStaffData;
   
//    if (isAccRole) {
//         staffData.sort(function (a, b) {
//            return `${a}.${ isStaff=='staff' ? reportingTo: workingFrom}`.localeCompare(`${b}.${ isStaff=='staff' ? reportingTo: workingFrom}`);
//        });
//        isAccRole = !isAccRole
//    } else {
//        staffData.sort(function (a, b) {
//            return b.reportingTo.localeCompare(a.reportingTo);
//        });
//        isAccRole = !isAccRole
//    }
//    if( isStaff=='staff'){
//     staffInfoTable.innerHTML='';
//     staffInfoTable.innerHTML =display(staffData);
//    }else{
//     exStaffInfoTable.innerHTML='';
//     exStaffInfoTable.innerHTML =display(exStaffData,'exStaff');
//    }
  
// }

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
    isAccName = true;
    isAccRole = true;
    isAccReportingTo= true;
   exStaffInfoTable.innerHTML=''
   let exStaffInfoResult=  display(exStaffData,'exStaff');

    addStaffId[0].classList.toggle("disp-none");
    exStaffInfoTable.innerHTML = exStaffInfoResult;

    exStaffQuery.forEach((item) => {
        item.classList.toggle("disp-none");
    })
    colorClass.forEach((item) => {
        item.classList.toggle("black");
    })
}
{/* <script src="../../manage_food/food_item/items.js"></script> */}


