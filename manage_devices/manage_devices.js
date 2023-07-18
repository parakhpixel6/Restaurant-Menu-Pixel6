
"use strict"

let deviceData = [
    { deviceId: "D001", deviceName: "Samsung Tab A3", serialNumber: "A1B2C3D4", type: "Android Tablet", maappedTo: "T01", status: "Enabled" },
    { deviceId: "D011", deviceName: "iPad Pro", serialNumber: "E5F6G7H8", type: "iPad (iOS)", maappedTo: "T02", status: "Enabled" },
    { deviceId: "D045", deviceName: "Lenovo Tab 4", serialNumber: "M4N5O6P7", type: "Android Tablet", maappedTo: "T03", status: "Disabled" },
    { deviceId: "D002", deviceName: "Lenovo Tab 4", serialNumber: "Y7Z8A9B1", type: "Android Tablet", maappedTo: "T04", status: "Disabled" },
    { deviceId: "D008", deviceName: "Lenovo Tab 4", serialNumber: "K1L2M3N4", type: "Android Tablet", maappedTo: "T05", status: "Enabled" },
    { deviceId: "D009", deviceName: "Lenovo Tab 4 Pro", serialNumber: "G6H7I8J9", type: "Android Tablet", maappedTo: "N/A", status: "Enabled" },
    { deviceId: "D010", deviceName: "Lenovo Tab 4 Pro", serialNumber: "Q8R9S1T2", type: "Android Tablet", maappedTo: "N/A", status: "Enabled" },
]

let tableData = [
    { tableId: "T001", capacity: "02", assignedStaff: "Vijay A, Karan J, Raj H, Danish J, Suraj S", assignedDevice: "Samsung Tab A3", status: "Enabled" },
    { tableId: "T002", capacity: "04", assignedStaff: "Nikhil K, Varun C, Aayush K, Rajiv R", assignedDevice: "iPad Pro", status: "Enabled" },
    { tableId: "T003", capacity: "10", assignedStaff: "Samir T, Abhinav S, Vikram U, Yash R, Zaid C, Kunal R", assignedDevice: "Lenovo Tab 4", status: "Disabled" },
    { tableId: "T004", capacity: "04", assignedStaff: "Veer J, Pranav S, Shreyas I, Aarav F, Ajay R, Vikram I", assignedDevice: "Lenovo Tab 4", status: "Disabled" },
    { tableId: "T005", capacity: "04", assignedStaff: "Aryan S, Naveen K, Keshav M, Rishi H, Vinay U", assignedDevice: "Lenovo Tab 4", status: "Enabled" },
    { tableId: "T006", capacity: "06", assignedStaff: "Aayush K, Vijay A, Abhinav S, Aarav F, Ajay R, ", assignedDevice: "Lenovo Tab 4 pro", status: "Enabled" },
    { tableId: "T007", capacity: "06", assignedStaff: "Zaid C, Kunal R, Raj H, Danish J, Varun C", assignedDevice: "Lenovo Tab 4 pro", status: "Enabled" },
]

let devicesTable = document.querySelector("#devicesTable");
let tablesInfoTable = document.querySelector("#tablesInfoTable");
let addDeviceQuery = document.querySelectorAll(".add-device");
let addTableQuery = document.querySelectorAll(".add-table");
let result = "",
    tableInfoResult = "";

tableData.forEach((item) => {
    tableInfoResult += `
    <tr>
        <td>${item.tableId}</td>
        <td>${item.capacity}</td>
        <td>${item.assignedStaff}</td>
        <td>${item.assignedDevice}</td>
        <td>${item.status}</td>
        <td><img onclick="addTableFun()" class="past-order-view-btn" src="../../assets/images/icons/edit.svg" alt=""> <img class="past-order-view-btn" src="../../assets/images/icons/delete.svg" alt=""></td>
    </tr>
    `
})

deviceData.forEach((item) => {
    result += `
    <tr>
        <td>${item.deviceId}</td>
        <td>${item.deviceName}</td>
        <td>${item.serialNumber}</td>
        <td>${item.type}</td>
        <td>${item.maappedTo}</td>
        <td>${item.status}</td>
        <td><img onclick="addDeviceFun()" class="past-order-view-btn" src="../../assets/images/icons/edit.svg" alt=""> <img class="past-order-view-btn" src="../../assets/images/icons/delete.svg" alt=""></td>
    </tr>
    `
})

if (devicesTable != null) {
    devicesTable.innerHTML = result;
}
else if (tablesInfoTable != null) {
    tablesInfoTable.innerHTML = tableInfoResult;
}

function addDeviceFun() {
    addDeviceQuery.forEach((item) => {
        item.classList.toggle("disp-none");
    })
}

function addTableFun() {
    addTableQuery.forEach((item) => {
        item.classList.toggle("disp-none")
    })
}
