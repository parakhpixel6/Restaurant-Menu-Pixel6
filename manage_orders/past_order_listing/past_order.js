// function myFunction1() {
//     document.querySelector(".running-orders-dash").classList.toggle("disp-none");
//     document.querySelector(".table-selected").classList.toggle("disp-none");
// }


function togglePastOrderFilterDivFun() {
  document.querySelectorAll(".past-order-filter-div").forEach((item) => {
    item.classList.toggle("disp-none");
  })
}
