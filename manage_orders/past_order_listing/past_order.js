let pastorderData = [
  {date:"11/05/2023", orderno:"O11B57", tableno:"01",customername:"Karan Jadhav", ordervalue:"₹1525.00", paymentmode:"N/A"},
  {date:"09/05/2023", orderno:"O11G75", tableno:"10",customername:"Rajendra Verma", ordervalue:"₹256.00", paymentmode:"Net Banking"},
  {date:"11/04/2023", orderno:"O10G12", tableno:"15",customername:"Jaydeep Sivakumar", ordervalue:"₹6230.00", paymentmode:"N/A"},
  {date:"11/05/2023", orderno:"O11Q01", tableno:"09",customername:"Ekta Tiwari", ordervalue:"₹12595.00", paymentmode:"UPI/ E-wallet"},
  {date:"12/12/2022", orderno:"O11E04", tableno:"21",customername:"Naresh Chavan", ordervalue:"₹892.00", paymentmode:"Credit/Debit Card"},
  {date:"25/05/2023", orderno:"O10E19", tableno:"25",customername:"Ajay Rathod", ordervalue:"₹3899.00", paymentmode:"Cash"},
  {date:"11/05/2023", orderno:"O10E05", tableno:"04",customername:"Nikhil Wadhawan", ordervalue:"₹2000.00", paymentmode:"UPI/ E-wallet"},
  {date:"11/06/2023", orderno:"O11E04", tableno:"18",customername:"Jitesh Rajput", ordervalue:"₹2689.00", paymentmode:"Cash"},
  {date:"20/05/2023", orderno:"O11G75", tableno:"06",customername:"Rasika Gandhi ", ordervalue:"₹16850.00", paymentmode:"UPI/ E-wallet"}
]

function showPastOrderTable() {
  let orderEntry = document.querySelector("#orderEntry")
  let result = ""
  pastorderData.forEach((item) => {
    // console.log(item);
    result += `
    <tr class="custom-table past-order-table">
        <td>${item.date}</td>
        <td>${item.orderno}</td>
        <td>${item.tableno}</td>
        <td>${item.customername}</td>
        <td>${item.ordervalue}</td>
        <td>${item.paymentmode}</td>
        <td><button class="past-order-view-btn staff-disable-btn" onclick="window.location.href='../../manage_orders/past_order_listing/past_order_detail.html'">View</button></td>
    </tr>
    `
  })
  orderEntry.innerHTML = result;
}


// name sort
var isAsceOrderDate = true;
function sortOrderDate(e){
  const { data, asce }  = showHideSortIcon(e, isAsceOrderDate, pastorderData, "date");
  pastorderData = data;
  isAsceOrderDate = asce;
  showPastOrderTable();
}

var isAsceCustName = true;
function sortName(e){
    const { data, asce } = showHideSortIcon(e, isAsceCustName, pastorderData, "customername");
    pastorderData = data;
    isAsceCustName = asce;
    showPastOrderTable();
}

var isAsceOrderNumber = true;
function sortOrderNumber(e){
  const { data, asce }  = showHideSortIcon(e, isAsceOrderNumber, pastorderData, "orderno");
  pastorderData = data;
  isAsceOrderNumber = asce;
  showPastOrderTable();
}

var isAsceOrderValue = true;
function sortOrderValue(e){
  const { data, asce }  = showHideSortIcon(e, isAsceOrderValue, pastorderData, "ordervalue");
  pastorderData = data;
  isAsceOrderValue = asce;
  showPastOrderTable();
}

var isAsceOrderPaymentmode = true;
function sortOrderPaymentmode(e){
  const { data, asce }  = showHideSortIcon(e, isAsceOrderPaymentmode, pastorderData, "paymentmode");
  pastorderData = data;
  isAsceOrderPaymentmode = asce;
  showPastOrderTable();
}

showPastOrderTable()

function togglePastOrderFilterDivFun() {
  document.querySelectorAll(".past-order-filter-div").forEach((item) => {
    item.classList.toggle("disp-none");
  })
}

 
//My Review Nav
// const reviewNav = document.querySelector('.review-nav');
// const links = reviewNav.getElementsByTagName('a');

// reviewNav.addEventListener('click', function (event) {

//   // Check if the clicked element is an <a> tag
//   if (event.target.tagName === 'A') {
//     // Remove active class from all links
//     for (var i = 0; i < links.length; i++) {
//       links[i].classList.remove('active');
//     }

//     // Add active class to the clicked link
//     event.target.classList.add('active');
//   }
// });

