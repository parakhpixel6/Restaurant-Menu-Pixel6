
"use strict"

let itemsData = [
    { img: "../../assets/images/img/french-toast.png", name: "French Toast", description: "Thick slices of bread dipped in a cinnamon batter, made with soya milk.", category: "Breakfast", price: "199" },
    { img: "../../assets/images/img/classic-breakfast.png", name: "Classic American Breakfast", description: "Two eggs any style, choice of bacon or sausage, toast, and home fries.", category: "Breakfast", price: "189" },
    { img: "../../assets/images/img/choclate-waffles.png", name: "Belgian Chocolate Waffles", description: "Two golden brown chocolate waffles served with whipped cream ", category: "Desserts", price: "289" },
    { img: "../../assets/images/img/pancakes.png", name: "Pancakes", description: "Three fluffy pancakes served with syrup, honey and berries.", category: "Breakfast", price: "149" },
    { img: "../../assets/images/img/orange-juice.png", name: "Freshly squeezed Orange Juice", description: "A glass of freshly squeezed orange juice, full of vitamin C.", category: "Beverages", price: "129" },
    { img: "../../assets/images/img/breakfast-burrito.png", name: "Breakfast Burrito", description: "Chorizo, black peppers, onions, chili and cheese wrapped in a flour tortilla.", category: "Breakfast", price: "210" },
]

let itemsTable = document.querySelector("#itemsTable");
let result = ""

itemsData.forEach((item) => {
    result += `
    <tr>
        <td><img src="${item.img}" alt="" width="49px" ></td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.category}</td>
        <td>${item.price}</td>
        <td><div style="display: flex; gap: 8px"><img src="../../assets/images/icons/edit.svg" alt=""> <img src="../../assets/images/icons/delete.svg" alt=""> <img src="../../assets/images/icons/info.svg" alt=""></div></td>
    </tr>
    `
})

itemsTable.innerHTML = result;