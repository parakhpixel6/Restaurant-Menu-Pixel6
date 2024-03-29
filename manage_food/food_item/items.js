
// "use strict"

// let itemsData = [
//     { img: "../../assets/images/img/french-toast.png", name: "French Toast", description: "Thick slices of bread dipped in a cinnamon batter, made with soya milk.", category: "Breakfast", price: "199" },
//     { img: "../../assets/images/img/classic-breakfast.png", name: "Classic American Breakfast", description: "Two eggs any style, choice of bacon or sausage, toast, and home fries.", category: "Breakfast", price: "189" },
//     { img: "../../assets/images/img/choclate-waffles.png", name: "Belgian Chocolate Waffles", description: "Two golden brown chocolate waffles served with whipped cream ", category: "Desserts", price: "289" },
//     { img: "../../assets/images/img/pancakes.png", name: "Pancakes", description: "Three fluffy pancakes served with syrup, honey and berries.", category: "Breakfast", price: "149" },
//     { img: "../../assets/images/img/orange-juice.png", name: "Freshly squeezed Orange Juice", description: "A glass of freshly squeezed orange juice, full of vitamin C.", category: "Beverages", price: "129" },
//     { img: "../../assets/images/img/breakfast-burrito.png", name: "Breakfast Burrito", description: "Chorizo, black peppers, onions, chili and cheese wrapped in a flour tortilla.", category: "Breakfast", price: "210" },
// ]

// let itemsTable = document.querySelector("#itemsTable");
// let result = ""

// itemsData.forEach((item) => {
//     result += `
//     <tr>
//         <td><img src="${item.img}" alt="" width="49px" ></td>
//         <td>${item.name}</td>
//         <td>${item.description}</td>
//         <td>${item.category}</td>
//         <td>${item.price}</td>
//         <td><div style="display: flex; gap: 8px"><img src="../../assets/images/icons/edit.svg" alt=""> <img src="../../assets/images/icons/delete.svg" alt=""> <img src="../../assets/images/icons/info.svg" alt=""></div></td>
//     </tr>
//     `
// })

// itemsTable.innerHTML = result;


"use strict"

let foodData = [
    {Image:"../../assets/images/img/fooditem/food-item1.png", ItemName:"French Toast", ItemDescription:"Thick slices of bread dipped in a cinnamon batter, made with soya milk.", category:"Breakfast" ,price:"189"},
    {Image:"../../assets/images/img/fooditem/food-item2.png", ItemName:"Classic American Breakfast", ItemDescription:"Two eggs any style, choice of bacon or sausage, toast, and home fries.", category:"Breakfast" ,price:"199"},
    {Image:"../../assets/images/img/fooditem/food-item3.png", ItemName:"Belgian Chocolate Waffles", ItemDescription:"Two golden brown chocolate waffles served with whipped cream ", category:"Desserts" ,price:"289"},
    {Image:"../../assets/images/img/fooditem/food-item4.png", ItemName:"Pancakes", ItemDescription:"Three fluffy pancakes served with syrup, honey and berries.", category:"Breakfast" ,price:"149"},
    {Image:"../../assets/images/img/fooditem/food-item5.png", ItemName:"Freshly squeezed Orange Juice", ItemDescription:"A glass of freshly squeezed orange juice, full of vitamin C.", category:"Beverages" ,price:"130"},
    {Image:"../../assets/images/img/fooditem/food-item6.png", ItemName:"Breakfast Burrito", ItemDescription:"Chorizo, black peppers, onions, chili and cheese wrapped in a flour tortilla.", category:"Breakfast" ,price:"210"},
]
function showFoodDataTable(){
    let foodTable = document.querySelector("#foodTable");

let resultfood = ""
    foodData.forEach((item) => {
        resultfood += `
        <tr>
            <td><img src="${item.Image}" alt=""></td>
            <td>${item.ItemName}</td>
            <td class="item-descp">${item.ItemDescription}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
            <td class="">
            <a onclick="editOrDeleteFoodItemFun('edit')"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">edit</span></a>
            <a onclick="window.location.href='../../manage_food/food_item/food_item_detail.html'"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">info</span></a>
            </td>
        </tr>
        `
    })
    foodTable.innerHTML = resultfood;
    
}

var isAsceItemName = true;
function sortItemName(e){
  const { data, asce }  = showHideSortIcon(e, isAsceItemName, foodData, "ItemName");
  foodData = data;
  isAsceItemName = asce;
  showFoodDataTable();
}
var isAsceCategory = true;
function sortCategory(e){
  const { data, asce }  = showHideSortIcon(e, isAsceCategory, foodData, "category");
  foodData = data;
  isAsceCategory = asce;
  showFoodDataTable();
}
var isAscePrice = true;
function sortPrice(e){
  const { data, asce }  = showHideSortIcon(e, isAscePrice, foodData, "price");
  foodData = data;
  isAscePrice = asce;
  showFoodDataTable();
}

// Number Short
// var isAccItems = true;
// function numbersort() {
//     var aftersort;
//     if (isAccItems) {
//         aftersort = foodData.sort(function (a, b) {
//             return b.price.localeCompare(a.price);
//         });
//         isAccItems = !isAccItems
//     } else {
//         aftersort = foodData.sort(function (a, b) {
//             return a.price.localeCompare(b.price);
//         });
//         isAccItems = !isAccItems
//     }

//     let foodTable = document.querySelector("#foodTable");
//     let resultfood = ""

// foodData.forEach((item) => {
//     resultfood += `
//     <tr>
//         <td><img src="${item.Image}" alt=""></td>
//         <td>${item.ItemName}</td>
//         <td class="item-descp">${item.ItemDescription}</td>
//         <td>${item.category}</td>
//         <td>${item.price}</td>
//         <td class="">
//         <a onclick="editOrDeleteFoodItemFun('edit')"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">edit</span></a>
//         <a onclick="window.location.href='../../manage_food/food_item/food_item_detail.html'"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">info</span></a>
//         </td>
//     </tr>
//     `
// })
// foodTable.innerHTML = resultfood;
// }

showFoodDataTable();

let addFoodQuery = document.querySelectorAll(".add-category");
function editOrDeleteFoodItemFun(operation = 'delete') {
    window.location.href = '../../manage_food/food_item/edit_item.html?operation='+operation
}

function addFoodItemFilterFun() {
    document.querySelectorAll(".food-item-filter-div").forEach((item) => {
        item.classList.toggle("disp-none");
    })
}

foodTable.innerHTML = resultfood;
function addCategoriesFun() {
    addFoodQuery.forEach((item) => {
        item.classList.toggle("disp-none");
    })
}

//Dropdown Notification 

const ddNotifiCount = document.querySelector('.notify-count');
const ddNotification = document.querySelector('.notify-dropdown');

ddNotifiCount.addEventListener('click', function() {
  if(document.querySelector('.notify-comment').style.display === "none") {

    ddNotification.style.boxShadow = "-10px 16px 25px 0px #DDDDDD";
    document.querySelector('.notify-comment').style.display = "block";
  } else {
    ddNotification.style.boxShadow = "none";
    document.querySelector('.notify-comment').style.display = "none";
  }
});
