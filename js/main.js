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

// Add click event listener to each submenu
subMenus.forEach(subMenu => {
    const link = subMenu.querySelector('.sidebar--navigations-link');
    const subSubMenu = subMenu.querySelector('.sidebar--navigations-submenu-link');
    const subsubMenuActive = subMenu.querySelector('.sidebar--navigations-subsubmenu');

    // Toggle active class and display on click
    link.addEventListener('click', () => {
        subMenus.forEach(otherSubMenu => {
            if (otherSubMenu !== subMenu) {
                const otherSubSubMenu = otherSubMenu.querySelector('.sidebar--navigations-submenu-link');
                const otherSubsubMenuActive = otherSubMenu.querySelector('.sidebar--navigations-subsubmenu');

                otherSubMenu.classList.remove('active');
                otherSubSubMenu.style.display = 'none';
                otherSubSubMenu.classList.remove('active');
                otherSubsubMenuActive.classList.remove('active');
            }
        });

        subMenu.classList.toggle('active');

        if (subMenu.classList.contains('active')) {
            subSubMenu.style.display = 'block';
            subSubMenu.classList.add('active');
            subsubMenuActive.classList.add('active');
        } else {
            subSubMenu.style.display = 'none';
            subSubMenu.classList.remove('active');
            subsubMenuActive.classList.remove('active');
            link.classList.remove('active');
        }
    });
});

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


// // SIDEBAR NAVIGATIONS SUBSUBMENU LINK COLOR SWITCHING
// const navigationSubMenuLinks = document.querySelectorAll('.sidebar--navigations-subsubmenu');
// let lastVisitedSubSubMenu = null;

// // Loop through the navigation links and add a click event listener
// navigationSubMenuLinks.forEach(subMenuLink => {
//   subMenuLink.addEventListener('click', function () {
//     navigationSubMenuLinks.forEach(subMenuLink => {
//       subMenuLink.classList.remove('active');
//     });
//     this.classList.add('active');
//     lastVisitedSubSubMenu = this;
//   });
// });

// // Get all sidebar--navigations-submenu elements
// const subMenus = document.querySelectorAll('.sidebar--navigations-submenu');

// // Add click event listener to each submenu
// subMenus.forEach(subMenu => {
//   const link = subMenu.querySelector('.sidebar--navigations-link');
//   const subSubMenu = subMenu.querySelector('.sidebar--navigations-submenu-link');
//   const subsubMenuActive = subMenu.querySelector('.sidebar--navigations-subsubmenu');

//   // Toggle active class and display on click
//   link.addEventListener('click', () => {
//     subMenus.forEach(otherSubMenu => {
//       if (otherSubMenu !== subMenu) {
//         const otherSubSubMenu = otherSubMenu.querySelector('.sidebar--navigations-submenu-link');
//         const otherSubsubMenuActive = otherSubMenu.querySelector('.sidebar--navigations-subsubmenu');

//         otherSubMenu.classList.remove('active');
//         otherSubSubMenu.style.display = 'none';
//         otherSubSubMenu.classList.remove('active');
//         otherSubsubMenuActive.classList.remove('active');
//       }
//     });

//     subMenu.classList.toggle('active');

//     if (subMenu.classList.contains('active')) {
//       subSubMenu.style.display = 'block';
//       //subSubMenu.classList.add('active');
//       //subsubMenuActive.classList.add('active');
//       //lastVisitedSubSubMenu = subsubMenuActive;
//     } else {
//       subSubMenu.style.display = 'none';
//       //subSubMenu.classList.remove('active');
//       //subsubMenuActive.classList.remove('active');
//       //link.classList.remove('active');
//       lastVisitedSubSubMenu = null; // Reset lastVisitedSubSubMenu when the submenu is deactivated


//     }
//   });
// });

// // SIDEBAR NAVIGATIONS LINK COLOR SWITCHING
// const navigationLinks = document.querySelectorAll('.sidebar--navigations-link');

// // Loop through the navigation links and add a click event listener
// navigationLinks.forEach(link => {
//   link.addEventListener('click', function () {
//     // Remove active class from all navigation links
//     navigationLinks.forEach(link => {
//       link.classList.remove('active');
//     });
//     this.classList.add('active');

//     // Check if the link has a parent with class .sidebar--navigations-submenu
//     const submenuParent = this.closest('.sidebar--navigations-submenu');
//     if (!submenuParent || !submenuParent.classList.contains('active')) {
//       const subMenus = document.querySelectorAll('.sidebar--navigations-submenu');
//       subMenus.forEach(subMenu => {
//         subMenu.classList.remove('active');
//         const subSubMenu = subMenu.querySelector('.sidebar--navigations-submenu-link');
//         const subsubMenuActive = subMenu.querySelector('.sidebar--navigations-subsubmenu');
//         if (subSubMenu && subsubMenuActive) {
//           subSubMenu.style.display = 'none';
//           subSubMenu.classList.remove('active');
//           subsubMenuActive.classList.remove('active');

//           // Remove active class from child links
//           const childLinks = subMenu.querySelectorAll('.sidebar--navigations-link');
//           childLinks.forEach(childLink => {
//             childLink.classList.remove('active');
//           });
//         }
//       });
//     }

//     // Activate the last visited subsubmenu
//     if (lastVisitedSubSubMenu) {
//       lastVisitedSubSubMenu.classList.add('active');
//       // Remove active class from other subsubmenus
//       const otherSubSubMenus = document.querySelectorAll('.sidebar--navigations-subsubmenu');
//       otherSubSubMenus.forEach(otherSubSubMenu => {
//         if (otherSubSubMenu === lastVisitedSubSubMenu) {
//           otherSubSubMenu.classList.remove('active');
//         } 
//       });
//     }
//   });
// });



function printTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Determine whether it is AM or PM
  var meridiem = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Add leading zeros if necessary
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var time = hours + ":" + minutes + " " + meridiem;

  // Output to the console
  // You can also update the time dynamically on your webpage
  // by setting the value of an HTML element using JavaScript
  // For example:
  document.getElementById("time").innerHTML = time;
}
  
// Call the printTime function every second (1000 milliseconds)
setInterval(printTime, 1000);



// Function to format the date
function formatDate(date) {
  const shortDayName = date.toLocaleString('default', { weekday: 'short' });
  const day = String(date.getDate()).padStart(2, '0');
  const monthName = date.toLocaleString('default', { month: 'short' });
  return `${shortDayName} ${day} ${monthName}`;
}

// Get the current date
const today = new Date();

// Format the current date
const formattedDate = formatDate(today);

// Update the <h3> element with the formatted current date
document.getElementById("date").textContent = formattedDate;

// Function to format the date in the desired format
function formatDateString(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
const todayDate = new Date(today);
const todayDateFormatted = formatDateString(todayDate);
console.log("One Day:", todayDateFormatted);

// Calculate and format the last week's date
const lastWeek = new Date(today);
lastWeek.setDate(today.getDate() - 7);
const lastWeekFormatted = formatDateString(lastWeek);
console.log("Last Week:", lastWeekFormatted);

// Calculate and format the last month's date
const lastMonth = new Date(today);
lastMonth.setMonth(today.getMonth() - 1);
const lastMonthFormatted = formatDateString(lastMonth);
console.log("Last Month:", lastMonthFormatted);

// Calculate and format the last year's date
const lastYear = new Date(today);
lastYear.setFullYear(today.getFullYear() - 1);
const lastYearFormatted = formatDateString(lastYear);
console.log("Last Year:", lastYearFormatted);

document.querySelector(".previous-performance-header-date").textContent = `${lastWeekFormatted} - ${todayDateFormatted}`;






document.addEventListener('DOMContentLoaded', function() {
  // Your Chart.js code here
  var config = {
    type: 'pie',
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
    }
  };
  
  var myPie = new Chart(document.getElementById('table-chart'), config);
  
    // Add the legend in custom area to allow CSS theming.
  document.querySelector('.tableStatus').innerHTML = myPie.generateLegend();

});



const dd = document.querySelector('#dropdown-wrapper');
const dl = document.querySelectorAll('.dropdown-list a');
const ppDefault = document.querySelector('.previous-performance-default');

dd.addEventListener('click', function() {
  this.classList.toggle('is-active');
});

dl.forEach((element) => {
  element.addEventListener('click', function(evt) {
    ppDefault.innerHTML = evt.currentTarget.textContent;
  })
})









