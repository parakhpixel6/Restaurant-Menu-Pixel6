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
  