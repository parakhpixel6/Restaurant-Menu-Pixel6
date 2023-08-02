"use strict"

let cusData = [
    {srno:"01", customerName:"Karan Jadhav", contactNo:"9130672713", emailID:"karanjadhav256@gmial.com", visits:"05", sales:"₹1525.00"},
    {srno:"02", customerName:"Rajendra Verma", contactNo:"8925684597", emailID:"rkverma@gmail.com", visits:"02", sales:"₹2689.00"},
    {srno:"03", customerName:"Jaydeep Sivakumar", contactNo:"9923589452", emailID:"jaydeep04@gmail.com", visits:"04", sales:"₹6230.00"},
    {srno:"04", customerName:"Ekta Tiwari", contactNo:"9189562351", emailID:"ektatiwari28@gmail.com", visits:"01", sales:"₹892.00"},
    {srno:"05", customerName:"Naresh Chavan", contactNo:"9925656234", emailID:"chavhannaresh8625@gmail.com", visits:"07", sales:"₹16850.00"},
    {srno:"06", customerName:"Ajay Rathod", contactNo:"8925684597", emailID:"N/A", visits:"02", sales:"₹892.00"},
    {srno:"07", customerName:"Nikhil Wadhawan", contactNo:"9962545896", emailID:"N/A", visits:"03", sales:"₹2689.00"},
    {srno:"08", customerName:"Jitesh Rajput", contactNo:"9923589452", emailID:"jitesh001@gmail.com", visits:"01", sales:"₹6230.00"},
    {srno:"09", customerName:"Rasika Gandhi ", contactNo:"8925684597", emailID:"gandhirasika04@gmail.com", visits:"06", sales:"₹12595.00"}
]
let customerEntry = document.querySelector("#customerEntry");
let result = ""

cusData.forEach((item) => {
    console.log(item);
    result += `
    <tr class="custom-table past-order-table">
        <td>${item.srno}</td>
        <td>${item.customerName}</td>
        <td>${item.contactNo}</td>
        <td>${item.emailID}</td>
        <td>${item.visits}</td>
        <td>${item.sales}</td>
    </tr>
    `
})

customerEntry.innerHTML = result;


