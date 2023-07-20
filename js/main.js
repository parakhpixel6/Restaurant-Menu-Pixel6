//SIDEBAR NAVIGATIONS SUBSUBMENU LINK COLOR SWITCHING
const navigationSubMenuLinks = document.querySelectorAll('.sidebar--navigations-subsubmenu');

// Loop through the navigation links and add a click event listener
navigationSubMenuLinks.forEach(subMenuLink => {
  subMenuLink.addEventListener('click', function() {
    navigationSubMenuLinks.forEach(subMenuLink => {
        subMenuLink.classList.remove('active');
    });
    this.classList.add('active');
    //lastVisitedSubSubMenu = this;
  });
});

// Get all sidebar--navigations-submenu elements
const subMenus = document.querySelectorAll('.sidebar--navigations-submenu');

// ... (existing code)

// Add click event listener to each submenu
subMenus.forEach(subMenu => {
  const link = subMenu.querySelector('.sidebar--navigations-link');
  const subSubMenu = subMenu.querySelector('.sidebar--navigations-submenu-link');
  const subsubMenuActive = subMenu.querySelector('.sidebar--navigations-subsubmenu');

  // Variable to store the firstChildSubSubMenu
  let firstChildSubSubMenu = subMenu.querySelector('.sidebar--navigations-subsubmenu .sidebar--navigations-submenu-link');

  // Toggle active class and display on click
  link.addEventListener('click', () => {
    const isActive = subMenu.classList.contains('active');

    subMenus.forEach(otherSubMenu => {
      if (otherSubMenu !== subMenu) {
        const otherSubSubMenu = otherSubMenu.querySelector('.sidebar--navigations-submenu-link');
        const otherSubsubMenuActive = otherSubMenu.querySelector('.sidebar--navigations-subsubmenu');

        otherSubMenu.classList.remove('active');
        otherSubSubMenu.style.display = 'none';
        otherSubSubMenu.classList.remove('active');
        otherSubsubMenuActive.classList.remove('active');

        // Remove active class from all child subsubmenu links
        const childSubSubMenus = otherSubMenu.querySelectorAll('.sidebar--navigations-subsubmenu .sidebar--navigations-submenu-link');
        childSubSubMenus.forEach(childSubSubMenu => {
          childSubSubMenu.classList.remove('active');
        });
      }
    });

    subMenu.classList.toggle('active');

    if (subMenu.classList.contains('active')) {
      subSubMenu.style.display = 'block';
      subsubMenuActive.classList.add('active');

      // Add active class to the first child subsubmenu link if it is not active
      if (firstChildSubSubMenu && !firstChildSubSubMenu.classList.contains('active')) {
        firstChildSubSubMenu.classList.add('active');
      }
    } else {
      subSubMenu.style.display = 'none';
      subSubMenu.classList.remove('active');
      subsubMenuActive.classList.remove('active');
    }
  });
});


// ... (existing code)





//// SIDEBAR NAVIGATIONS LINK COLOR SWITCHING
const navigationLinks = document.querySelectorAll('.sidebar--navigations-link');

// Loop through the navigation links and add a click event listener
navigationLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all navigation links
    navigationLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');

    // Check if the link has a parent with class .sidebar--navigations-submenu
    const submenuParent = this.closest('.sidebar--navigations-submenu');
    if (!submenuParent || !submenuParent.classList.contains('active')) {
        const subMenus = document.querySelectorAll('.sidebar--navigations-submenu');
        subMenus.forEach(subMenu => {
        subMenu.classList.remove('active');
        const subSubMenu = subMenu.querySelector('.sidebar--navigations-submenu-link');
        const subsubMenuActive = subMenu.querySelector('.sidebar--navigations-subsubmenu');
        if (subSubMenu && subsubMenuActive) {
            subSubMenu.style.display = 'none';
            subSubMenu.classList.remove('active');
            subsubMenuActive.classList.remove('active');

            // Remove active class from child links
            const childLinks = subMenu.querySelectorAll('.sidebar--navigations-link');
            childLinks.forEach(childLink => {
                childLink.classList.remove('active');
            });

            // if (lastVisitedSubSubMenu) {
            //     lastVisitedSubSubMenu.classList.add('active');
            //     // Remove active class from other subsubmenus
            //     const otherSubSubMenus = document.querySelectorAll('.sidebar--navigations-subsubmenu');
            //     otherSubSubMenus.forEach(otherSubSubMenu => {
            //         if (otherSubSubMenu === lastVisitedSubSubMenu) {
            //         otherSubSubMenu.classList.remove('active');
            //         } 
            //     });
            // }
        }
      });
    }
  });
});


// PIE CHART
document.addEventListener('DOMContentLoaded', function() {
  // Your Chart.js code here
  var config = {
    type: 'pie',
    labels: [
      'Engaged',
      'Available',
      'Occupied'
    ],
    data: {
      datasets: [{
        borderWidth: 1,
        backgroundColor: [
          '#54BA54',
          '#DDDDDD',
          '#B3D9E2'
        ],
        data: [22, 60, 18]
      }]
    },
    options: {
      interaction: {
        intersect: false,
        includeInvisible: true,
        events: false,
      }
    }
  };
  
  var myPie = new Chart(document.getElementById('table-chart'), config);
  
    // Add the legend in custom area to allow CSS theming.
  document.querySelector('.tableStatus').innerHTML = myPie.generateLegend();

});



//DROPDOWN - WRAPPER
const dropdownWrappers = document.querySelectorAll('.dropdown-wrapper');
const dropdownLinks = document.querySelectorAll('.dropdown-list a');
const dropdownDefaults = document.querySelectorAll('.dropdown-default');

dropdownWrappers.forEach((dropdownWrapper) => {
  dropdownWrapper.addEventListener('click', function() {
    this.classList.toggle('is-active');
  });
});

dropdownLinks.forEach((dropdownLink) => {
  dropdownLink.addEventListener('click', function(evt) {
    const dropdownDefault = this.closest('.dropdown-wrapper').querySelector('.dropdown-default');
    dropdownDefault.innerHTML = evt.currentTarget.textContent;

    if(evt.currentTarget.textContent === "All Orders") {
      dropdownDefault.innerHTML = 'Filter Orders'
    }
  });
});








