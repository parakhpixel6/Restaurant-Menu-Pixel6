
"use strict"

let salesData = [
    {startHour:"11 am", noOfOrders:"35", sales:"₹2,542", taxes:"₹127", grossValue:"₹2414"},
    {startHour:"12 pm", noOfOrders:"42", sales:"₹8,060", taxes:"₹392", grossValue:"₹7657"},
    {startHour:"01 pm", noOfOrders:"35", sales:"₹7,570", taxes:"₹360", grossValue:"₹7191"},
    {startHour:"02 pm", noOfOrders:"43", sales:"₹4,280", taxes:"₹214", grossValue:"₹4066"},
    {startHour:"03 pm", noOfOrders:"21", sales:"₹9,530", taxes:"₹470", grossValue:"₹9050"},
    {startHour:"04 pm", noOfOrders:"27", sales:"₹4,280", taxes:"₹214", grossValue:"₹4066"},
    {startHour:"05 pm", noOfOrders:"28", sales:"₹2,542", taxes:"₹127", grossValue:"₹2414"},
    {startHour:"06 pm", noOfOrders:"17", sales:"₹8,060", taxes:"₹392", grossValue:"₹7657"},
    {startHour:"07 pm", noOfOrders:"16", sales:"₹7,570", taxes:"₹360", grossValue:"₹7191"},
    {startHour:"08 pm", noOfOrders:"25", sales:"₹4,280", taxes:"₹214", grossValue:"₹4066"},
    {startHour:"09 pm", noOfOrders:"33", sales:"₹9,530", taxes:"₹470", grossValue:"₹9050"},
    {startHour:"10 pm", noOfOrders:"38", sales:"₹4,280", taxes:"₹214", grossValue:"₹4066"},
]

let tipData = [
    {orderNo:"O8E463", billAmt:"₹2,500", tipAmt:"₹100"},
    {orderNo:"O8E464", billAmt:"₹10,567", tipAmt:"₹300"},
    {orderNo:"O8E465", billAmt:"₹3,421", tipAmt:"₹100"},
    {orderNo:"O8E466", billAmt:"₹7,664", tipAmt:"₹200"},
    {orderNo:"O8E467", billAmt:"₹3,564", tipAmt:"₹100"},
    {orderNo:"O8E468", billAmt:"₹5,741", tipAmt:"₹100"},
    {orderNo:"O8E469", billAmt:"₹6,212", tipAmt:"₹200"},
    {orderNo:"O8E470", billAmt:"₹8,552", tipAmt:"₹200"},
    {orderNo:"O8E471", billAmt:"₹4,122", tipAmt:"₹100"},   
    {orderNo:"O8E472", billAmt:"₹9,891", tipAmt:"₹200"},
    {orderNo:"O8E473", billAmt:"₹5,741", tipAmt:"₹100"},
    {orderNo:"O8E474", billAmt:"₹5,384", tipAmt:"₹100"}
]

let foodData = [
    {dishName:"Pancakes", unitsSold:"1856", revenue:"₹23,56,895", avgRating:"../../assets/images/icons/5star.png"},
    {dishName:"Grilled Chicken", unitsSold:"1588", revenue:"₹22,32,262", avgRating:"../../assets/images/icons/3star.png"},
    {dishName:"Chicken Tikka", unitsSold:"1136", revenue:"₹21,24,356", avgRating:"../../assets/images/icons/4star.png"},
    {dishName:"Eggplant Parmesan", unitsSold:"1766", revenue:"₹21,12,710", avgRating:"../../assets/images/icons/5star.png"},
    {dishName:"Seafood Paella", unitsSold:"1621", revenue:"₹19,82,307", avgRating:"../../assets/images/icons/5star.png"},
    {dishName:"Mushroom Risotto", unitsSold:"1574", revenue:"₹16,62,562", avgRating:"../../assets/images/icons/1star.png"},
    {dishName:"French Toast", unitsSold:"1342", revenue:"₹12,16,000", avgRating:"../../assets/images/icons/3star.png"},
    {dishName:"Classic American Breakfast", unitsSold:"1347", revenue:"₹7,05,060", avgRating:"../../assets/images/icons/3star.png"},
    {dishName:"Belgian Chocolate Waffles", unitsSold:"1455", revenue:"₹6,46,623", avgRating:"../../assets/images/icons/4star.png"},
    {dishName:"Hot Chocolate", unitsSold:"1686", revenue:"₹5,92,157", avgRating:"../../assets/images/icons/5star.png"},
]

let salesTable = document.querySelector("#salesReportTable");
let foodTable = document.querySelector("#foodReportTable");
let tipTable = document.querySelector("#tipReportTable");
let result = "",
    tipResult = "",
    foodResult = "";

salesData.forEach((item) => {
    result += `
    <tr>
        <td>${item.startHour}</td>
        <td>${item.noOfOrders}</td>
        <td>${item.sales}</td>
        <td>${item.taxes}</td>
        <td>${item.grossValue}</td>
    </tr>
    `
})

tipData.forEach((item, i) => {
    i += 1
    tipResult += `
    <tr>
        <td>${i}</td>
        <td>${item.orderNo}</td>
        <td>${item.billAmt}</td>
        <td>${item.tipAmt}</td>
    </tr>
    `
})

foodData.forEach((item, i) => {
    i += 1
    foodResult += `
    <tr>
        <td>${i}</td>
        <td>${item.dishName}</td>
        <td>${item.unitsSold}</td>
        <td>${item.revenue}</td>
        <td><img src="${item.avgRating}" alt=""></td>
    </tr>
    `
})


if (salesTable != null) {
    salesTable.innerHTML = result;
}
else if (tipTable != null) {
    tipTable.innerHTML = tipResult;
}
else if (foodTable != null) {
    foodTable.innerHTML = foodResult;
}


