
"use strict"

let cateogryData = [
    { cateogryName: "Breakfast Dishes", icon: "../../assets/images/icons/food-categories/breakfast-dishes.svg", categoryDescription: "Dishes served in the morning, such as omelets or pancakes.", noOfItems: "15 items" },
    { cateogryName: "Beverages", icon: "../../assets/images/icons/food-categories/beverages.svg", categoryDescription: "Drinks served with or without alcohol, such as coffee or cocktails.", noOfItems: "22 items" },
    { cateogryName: "Seafood Dishes", icon: "../../assets/images/icons/food-categories/seafood-dishes .svg", categoryDescription: "Dishes made with various types of seafood, such as shrimp or salmon.", noOfItems: "11 items" },
    { cateogryName: "Soups", icon: "../../assets/images/icons/food-categories/soups.svg", categoryDescription: "Hot or cold soups made with various ingredients, such as tomato.", noOfItems: "07 items" },
    { cateogryName: "Desserts", icon: "../../assets/images/icons/food-categories/desserts.svg", categoryDescription: "Dishes served in the morning, such as omelets or pancakes. ", noOfItems: "15 items" },
    { cateogryName: "Brunch Dishes", icon: "../../assets/images/icons/food-categories/brunch-dishes.svg", categoryDescription: "Drinks served with or without alcohol, such as coffee or cocktails.", noOfItems: "22 items" },
    { cateogryName: "Appetizers", icon: "../../assets/images/icons/food-categories/appetizers.svg", categoryDescription: "Dishes made with various types of seafood, such as shrimp or salmon.", noOfItems: "11 items" }
]

function showCategoryTable() {
    let categoriesTable = document.querySelector("#categoriesTable");
    let result = ""

    cateogryData.forEach((item) => {
        result += `
          <tr>
              <td>${item.cateogryName}</td>
              <td><img src="${item.icon}" alt=""></td>
              <td class="item-descp">${item.categoryDescription}</td>
              <td>${item.noOfItems}</td>
              <td><div>
              <a onclick="addCategoriesFun()"><span class="material-symbols-rounded sidebar--navigations-link-icon past-order-view-btn clr-red">edit</span></a>
              </div></td>
          </tr>
          `
    })
    categoriesTable.innerHTML = result;
}

var isAsceNoOfItems = true;
function numbersort(e) {
    const { data, asce }  = showHideSortIcon(e, isAsceNoOfItems, cateogryData, "noOfItems")
    cateogryData = data
    isAsceNoOfItems = asce
    showCategoryTable()    
}

// Name Short
var isAsceCategoryName = true;
function shortName(e) {
    const { data, asce }  = showHideSortIcon(e, isAsceCategoryName, cateogryData, "cateogryName")
    cateogryData = data
    isAsceCategoryName = asce
    showCategoryTable()    
}



// default table
let addCategoriesQuery = document.querySelectorAll(".add-category");
let colorClass = document.querySelector(".path");

showCategoryTable()    

function addCategoriesFun() {
    addCategoriesQuery.forEach((item) => {
        item.classList.toggle("disp-none");
    })
    colorClass.classList.toggle("black")
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
