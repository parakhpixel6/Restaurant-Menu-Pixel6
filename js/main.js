
//SIDEBAR NAVIGATIONS LINK COLOR SWITCHING
const navigationLinks = document.querySelectorAll('.sidebar--navigations-link');

// Loop through the navigation links and add a click event listener
navigationLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all navigation links
    navigationLinks.forEach(link => {
        const submenuLinkRemove = this.nextElementSibling;
        link.classList.remove('active');

        if (submenuLinkRemove && submenuLinkRemove.classList.contains('sidebar--navigations-submenu-link')) {
        // Toggle the display of the submenu link
            submenuLinkRemove.style.display = 'none';
        }
    });

    // Add active class to the clicked navigation link
    this.classList.add('active');

    // Get the submenu link of the clicked navigation link
    const submenuLink = this.nextElementSibling;
    if (submenuLink && submenuLink.classList.contains('sidebar--navigations-submenu-link')) {
    // Toggle the display of the submenu link
        submenuLink.style.display = 'block';
    }

  });
});

//SIDEBAR DROPDOWN SHOW 

// const submenuLink = document.querySelectorAll('.sidebar--navigations-submenu-link');

// // const checkPreviousEelementActive = submenuLink.previousElementSibling

// submenuLink.forEach(check => {
//     check.addEventListener('click', function() {
//         const checkPreviousEelementActive = check.previousElementSibling;

//         if(checkPreviousEelementActive.classList.contains('active')) {
//             if (submenuLink.style.display === 'none') {
//                 submenuLink.style.display = 'block';
//             } else {
//                 submenuLink.style.display = 'none';
//             }
//         }
//     });
// });


