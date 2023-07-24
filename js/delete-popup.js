// let del = document.getElementById("delete-food-item");
let popWin = document.querySelector(".global-container");
let popWinMerge = document.querySelector(".global-container-merge");
let cancelButton = document.querySelector(".cancel");

// del.addEventListener("click", popIt);
function popIt(){
  popWin.classList.remove("unpop");
  popWin.classList.add("pop");
  popWin.scrollIntoView();
}

//for popup close
function unPopIt(){
  popWin.classList.remove("pop");
  popWin.classList.add("unpop");
}

popWin.addEventListener("click",outWin);
popWinMerge.addEventListener("click",outWinMerge);
function outWin(e){
  if (e.target.id === "global"){
    unPopIt();
  }
}
function outWinMerge(e) {
  console.log(e.target.id);
  if (e.target.id === "globalMerge"){
    popWinMerge.classList.toggle("pop");
  }
}

function popItMerge() {
  popWinMerge.classList.toggle("pop");
  popWinMerge.scrollIntoView();
}