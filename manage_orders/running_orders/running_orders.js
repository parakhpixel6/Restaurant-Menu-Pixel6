"use strict"

let tables = [
    { tableNo: "T01", img: "../../assets/images/img/tables/T01.png" },
    { tableNo: "T02", img: "../../assets/images/img/tables/T02.svg" },
    { tableNo: "T03", img: "../../assets/images/img/tables/T03.svg" },
    { tableNo: "T04", img: "../../assets/images/img/tables/T04.svg" },
    { tableNo: "T05", img: "../../assets/images/img/tables/T05.svg" },
    { tableNo: "T06", img: "../../assets/images/img/tables/T06.svg" },
    { tableNo: "T07", img: "../../assets/images/img/tables/T07.svg" },
    { tableNo: "T08", img: "../../assets/images/img/tables/T08.svg" },
    { tableNo: "T09", img: "../../assets/images/img/tables/T09.svg" },
    { tableNo: "T10", img: "../../assets/images/img/tables/T10.svg" },
    { tableNo: "T11", img: "../../assets/images/img/tables/T11.svg" },
    { tableNo: "T12", img: "../../assets/images/img/tables/T12.svg" },
    { tableNo: "T13", img: "../../assets/images/img/tables/T13.svg" },
    { tableNo: "T14", img: "../../assets/images/img/tables/T14.svg" },
    { tableNo: "T15", img: "../../assets/images/img/tables/T15.svg" },
    { tableNo: "T16", img: "../../assets/images/img/tables/T16.svg" },
]

let table = document.getElementById("table-info");
let result = "";

tables.forEach((item) => {
    result += `
    <div>
        <img  class="past-order-view-btn" id="tableNum" onclick="myFunction()" src="${item.img}"  alt="">
    </div> 
    `
})
document.querySelector(".table-info").innerHTML = result;

function myFunction() {
    document.querySelector(".running-orders-dash").classList.toggle("disp-none");
    document.querySelector(".table-selected").classList.toggle("disp-none");
}

