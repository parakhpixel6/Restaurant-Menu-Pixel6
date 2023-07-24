"use strict"

let tables = [
    { tableNo: "T01", statusSubText: "&#8377; 4,800", statusText: "E04A01", status: "occupied", img: "../../assets/images/img/tables/T01.png" },
    { tableNo: "T02", statusSubText: "", statusText: "T01", status: "merged", img: "../../assets/images/img/tables/T02.svg" },
    { tableNo: "T03", statusSubText: "", statusText: "16:02", status: "engaged", img: "../../assets/images/img/tables/T03.svg" },
    { tableNo: "T04", statusSubText: "", statusText: "11:23", status: "engaged", img: "../../assets/images/img/tables/T04.svg" },
    { tableNo: "T05", statusSubText: "10 Seats", statusText: "", status: "available", img: "../../assets/images/img/tables/T05.svg" },
    { tableNo: "T06", statusSubText: "&#8377; 14,800", statusText: "E04A15", status: "occupied", img: "../../assets/images/img/tables/T06.svg" },
    { tableNo: "T07", statusSubText: "", statusText: "08:17", status: "engaged", img: "../../assets/images/img/tables/T07.svg" },
    { tableNo: "T08", statusSubText: "&#8377; 1,280", statusText: "E04B05", status: "occupied", img: "../../assets/images/img/tables/T08.svg" },
    { tableNo: "T09", statusSubText: "02 Seats", statusText: "", status: "available", img: "../../assets/images/img/tables/T09.svg" },
    { tableNo: "T10", statusSubText: "", statusText: "16:02", status: "engaged", img: "../../assets/images/img/tables/T10.svg" },
    { tableNo: "T11", statusSubText: "04 Seats", statusText: "", status: "available", img: "../../assets/images/img/tables/T11.svg" },
    { tableNo: "T12", statusSubText: "&#8377; 590", statusText: "E04A01", status: "occupied", img: "../../assets/images/img/tables/T12.svg" },
    { tableNo: "T13", statusSubText: "", statusText: "03:45", status: "engaged", img: "../../assets/images/img/tables/T13.svg" },
    { tableNo: "T14", statusSubText: "&#8377; 7,120", statusText: "E04A18", status: "occupied", img: "../../assets/images/img/tables/T14.svg" },
    { tableNo: "T15", statusSubText: "04 Seats", statusText: "", status: "available", img: "../../assets/images/img/tables/T15.svg" },
    { tableNo: "T16", statusSubText: "&#8377; 5,290", statusText: "E04B21", status: "occupied", img: "../../assets/images/img/tables/T16.svg" },
]

let table = document.getElementById("table-info");
let result = "";

tables.forEach((item) => {
    result += `
    <div class="cursor-pointer" onclick="myFunction()">
        <div class ="circle text-center ${item.status}">
            <p class="table_no">${item.tableNo}</p>
            <div class="status-text-container"><div class ="status-icon text-center"></div>${item.statusText}</div>
            <p class="">${item.statusSubText}</p>
        </div>
        <div class="pie-wrapper">
            <div class="pie">
              <div class="left-side half-circle ${item.status}"></div>
            </div>
        </div>
    </div >
    `
})
document.querySelector(".table-info").innerHTML = result;

function myFunction() {
    document.querySelector(".running-orders-dash").classList.toggle("disp-none");
    document.querySelector(".table-selected").classList.toggle("disp-none");
}

