"use strict"

let tables = [
    { tableNo: "T01", statusSubText: "&#8377; 4,800", statusText: "E04A01", status: "occupied", progress: "25" },
    { tableNo: "T02", statusSubText: "", statusText: "T01", status: "merged" },
    { tableNo: "T03", statusSubText: "", statusText: "16:02", status: "engaged" },
    { tableNo: "T04", statusSubText: "", statusText: "11:23", status: "engaged" },
    { tableNo: "T05", statusSubText: "10 Seats", statusText: "", status: "available" },
    { tableNo: "T06", statusSubText: "&#8377; 14,800", statusText: "E04A15", status: "occupied", progress: "75" },
    { tableNo: "T07", statusSubText: "", statusText: "08:17", status: "engaged" },
    { tableNo: "T08", statusSubText: "&#8377; 1,280", statusText: "E04B05", status: "occupied", progress: "50" },
    { tableNo: "T09", statusSubText: "02 Seats", statusText: "", status: "available" },
    { tableNo: "T10", statusSubText: "", statusText: "16:02", status: "engaged" },
    { tableNo: "T11", statusSubText: "04 Seats", statusText: "", status: "available" },
    { tableNo: "T12", statusSubText: "&#8377; 590", statusText: "E04A01", status: "occupied", progress: "25" },
    { tableNo: "T13", statusSubText: "", statusText: "03:45", status: "engaged" },
    { tableNo: "T14", statusSubText: "&#8377; 7,120", statusText: "E04A18", status: "occupied", progress: "50" },
    { tableNo: "T15", statusSubText: "04 Seats", statusText: "", status: "available" },
    { tableNo: "T16", statusSubText: "&#8377; 5,290", statusText: "E04B21", status: "occupied", progress: "75" },
]

console.log(tables);
let table = document.getElementById("table-info");
let activeTab = document.querySelectorAll(".table-status");
showTable(tables);

function showTable(tableData) {
    let result = "";
    tableData.forEach((item) => {
        result += `
    <div class="${item.status === "occupied" ? "cursor-pointer" : ""}" onclick="${item.status === "occupied" ? "myFunction()" : ""}">
        <div class ="circle text-center ${item.status}">
            <p class="table_no">${item.tableNo}</p>
            <div class="status-text-container"><div class ="status-icon text-center"></div>${item.statusText}</div>
            <p class="">${item.statusSubText}</p>
        </div>
        <div class="pie-wrapper">
            <div class="pie">
            ${item.progress === "75" ?
            `<div class="left-side half-circle ${item.status} circle-50"></div>
            <div class="half-circle ${item.status} circle-${item.progress}"></div>` :
            `<div class="left-side half-circle ${item.status} ${item.status === "engaged" ? "loader": ""} circle-${item.progress}"></div>`}
            </div>
        </div>
    </div >
    `
    })
    table.innerHTML = result;
}
function myFunction() {
    document.querySelector(".running-orders-dash").classList.toggle("disp-none");
    document.querySelector(".table-selected").classList.toggle("disp-none");
}

function statusCategory(category) {
    table.innerHTML = "";
    if (category == "all") {
        showTable(tables);
    } else {
        let tablesResult = tables.filter((table) => {
            return table.status == category;
        });
        showTable(tablesResult);
    }
    activeTab.forEach((tab) => tab.classList.remove("active"))
    document.getElementById(category).classList.add("active");
}



// //Dropdown Notification 
