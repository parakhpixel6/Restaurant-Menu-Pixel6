const range = document.querySelectorAll(".range-slider span input");
progress = document.querySelector(".range-slider .progress");
let gap = 0.1;
const inputValue = document.querySelectorAll(".numberVal span");

range.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(range[0].value);
    let maxRange = parseInt(range[1].value);

    if (maxRange - minRange < gap) {
      if (e.target.className === "range-min") {
        range[0].value = maxRange - gap;
      } else {
        range[1].value = minRange + gap;
      }
    } else {
      progress.style.left = (minRange / range[0].max) * 100 + "%";
      progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
      inputValue[0].innerHTML = '₹'+ minRange;
      inputValue[1].innerHTML = '₹'+ maxRange;
      inputValue[0].style.marginLeft =  (minRange / range[0].max) * 100 + "%";
      inputValue[1].style.marginRight = 100 - (maxRange / range[1].max) * 100 + "%";
    }
  });
});