// function myFunction1() {
//     document.querySelector(".running-orders-dash").classList.toggle("disp-none");
//     document.querySelector(".table-selected").classList.toggle("disp-none");
// }


function togglePastOrderFilterDivFun() {
  document.querySelectorAll(".past-order-filter-div").forEach((item) => {
    item.classList.toggle("disp-none");
  })
}


//My Review Nav
const reviewNav = document.querySelector('.review-nav');
const links = reviewNav.getElementsByTagName('a');

reviewNav.addEventListener('click', function (event) {

  // Check if the clicked element is an <a> tag
  if (event.target.tagName === 'A') {
    // Remove active class from all links
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }

    // Add active class to the clicked link
    event.target.classList.add('active');
  }
});
