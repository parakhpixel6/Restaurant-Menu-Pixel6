"use strict"

let cusData = [
    {customerName:"Karan Jadhav", contactNo:"9130672713", emailID:"karanjadhav256@gmial.com", visits:"05", sales:"₹1525.00"},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
    {customerName:"", contactNo:"", emailID:"", visits:"", sales:""},
]

let customerEntry = document.querySelector("#customerEntry");
let result = ""

cusData.forEach((item) => {
    console.log(item);
    result += `
    <tr>
        <td>${item.customerName}</td>
        <td>${item.contactNo}</td>
        <td>${item.emailID}</td>
        <td>${item.visits}</td>
        <td>${item.sales}</td>
    </tr>
    `
})
console.log(result);
console.log(customerEntry);

customerEntry.innerHTML = result;