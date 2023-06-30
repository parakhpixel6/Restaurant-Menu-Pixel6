
"use strict"

let staffData = [
    {staffId:"S001", image:"../assets/images/img/staff/admin.png", staffName:"Rajendra Singh", role:"Admin", reportingTo:"N/A", workingSince:"21 Jun 2020"},
    {staffId:"S002", image:"../assets/images/img/staff/manager.png", staffName:"Jaydeep Sivakumar", role:"Manager", reportingTo:"Ajay Rathod", workingSince:"28 May 2021"},
    {staffId:"S003", image:"../assets/images/img/staff/captain.png", staffName:"Ekta Tiwari", role:"Captain", reportingTo:"Jaydeep Sivakumar", workingSince:"14 May 2021"},
    {staffId:"S004", image:"../assets/images/img/staff/server.png", staffName:"Naresh Chavan", role:"Server", reportingTo:"Jaydeep Sivakumar", workingSince:"02 Jun 2020"}
]

let staffInfoTable = document.querySelector("#staffInfoTable");
let exStaffInfoTable = document.querySelector("#exStaffInfoTable");
let staffInfoResult = "";

staffData.forEach((item) => {
    staffInfoResult += `
    <tr>
        <td>${item.staffId}</td>
        <td><img src="${item.image}" alt=""></td>
        <td>${item.staffName}</td>
        <td>${item.role}</td>
        <td>${item.reportingTo}</td>
        <td>${item.workingSince}</td>
        <td><img src="../../assets/images/icons/edit.svg" alt=""> <img src="../../assets/images/icons/delete.svg" alt=""></td>
    </tr>
    `
})

staffData.forEach((item) => {
    exStaffInfoResult += `
    <tr>
        <td>${item.staffId}</td>
        <td><img src="${item.image}" alt=""></td>
        <td>${item.staffName}</td>
        <td>${item.role}</td>
        <td>${item.reportingTo}</td>
        <td>${item.workingSince}</td>
        <td><img src="../../assets/images/icons/edit.svg" alt=""> <img src="../../assets/images/icons/delete.svg" alt=""></td>
    </tr>
    `
})

if (staffInfoTable != null) {
    staffInfoTable.innerHTML = staffInfoResult;
}
else if (exStaffInfoTable != null) {
    exStaffInfoTable.innerHTML = exStaffInfoResult;
}
