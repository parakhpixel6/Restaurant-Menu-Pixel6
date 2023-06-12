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

function printTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Add leading zeros if necessary
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var time = hours + ":" + minutes;

  //console.log(time); 
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



