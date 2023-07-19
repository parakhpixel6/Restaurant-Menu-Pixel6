// let del = document.getElementById("delete-food-item");
let popWin = document.querySelector(".global-container");
let cancelButton = document.querySelector(".cancel");

// del.addEventListener("click", popIt);
function popIt(){
  popWin.classList.remove("unpop");
  popWin.classList.add("pop");
}

//for popup close
function unPopIt(){
  popWin.classList.remove("pop");
  popWin.classList.add("unpop");
}

popWin.addEventListener("click",outWin);
function outWin(e){
  if (e.target.id === "global"){
    unPopIt();
  }
}