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



// Function to get the short day name
function getShortDayName(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

// Function to get the month name
function getMonthName(date) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return months[date.getMonth()];
}

// Function to format the date
function formatDate(date) {
  const shortDayName = getShortDayName(date);
  const monthName = getMonthName(date);
  const day = date.getDate();
  return `${shortDayName} ${day} ${monthName}`;
}

// Get the current date
const currentDate = new Date();

// Format the date
const formattedDate = formatDate(currentDate);

// Update the <h3> element with the formatted date
document.getElementById("date").textContent = formattedDate;





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

  // var ctx = document.getElementById("order-chart").getContext('2d');
  // var barChart = new Chart(ctx, {
  //   type: 'bar',
  //   options: {
      
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             display: false,
  //           },
  //           gridLines: {
  //             display: false
  //           }
  //         }],
  //         xAxes: [{
  //           barThickness: 24,
  //           ticks: {
  //             padding: 1,
  //             fontSize: 12
  //           },
  //           gridLines: {
  //             display: false
  //           },
            
  //         }]
  //     },
  //     legend: {
  //       display: false
  //     },
  //   },
  //   data: {
  //     labels: ["11am-12pm", "01pm-02pm", "02pm-03pm", "03pm-04pm", "04pm-05pm", "05pm-06pm", "06pm-07pm", "07pm-08pm", "08pm-09pm", "09pm-10pm", , "10pm-11pm"],
  //     datasets: [{
  //       data: [30, 69, 3, 17, 28, 24, 7, 30, 69, 3, 17, 28, {
  //         display: false,
  //       }],
  //       backgroundColor: "rgba(255,0,0,1)"
  //     }, {
      
  //       data: [30, 69, 3, 17, 28, 24, 7, 30, 69, 3, 17, 28, {
  //         display: false,
  //       }],
  //       backgroundColor: "rgba(0,0,255,1)"
  //     }, {
        
  //       data: [30, 69, 3, 17, 28, 24, 7, 30, 69, 3, 17, 28, {
  //         display: false,
  //       }],
  //       backgroundColor: "green"
  //     }]
  //   }
  // });
  // document.querySelector('.orderStatus').innerHTML = barChart.generateLegend();
});





