//Get Window Width
let windowWidth = window.innerWidth;

//CV Responsive
let getCV = document.getElementById("cv");
if (windowWidth < 768) {
  getCV.href = "images/CV_Florian_Batt_Phone.pdf";
} else {
  getCV.href = "images/CV_Florian_Batt.pdf";
}

//Stocks
let getStocks = document.getElementById("stocks");
let getStocksFirstChild = getStocks.firstElementChild;
let getStocksLastChild = getStocks.lastElementChild;

//BootStrap
let getBootstrap = document.getElementById("bootstrap");
let getBootstrapFirstChild = getBootstrap.firstElementChild;
let getBootstrapLastChild = getBootstrap.lastElementChild;

//Algo
let getAlgo = document.getElementById("algo");
let getAlgoFirstChild = getAlgo.firstElementChild;
let getAlgoLastChild = getAlgo.lastElementChild;

//CRUD
let getCrud = document.getElementById("crud");
let getCrudFirstChild = getCrud.firstElementChild;
let getCrudLastChild = getCrud.lastElementChild;

console.log(`Width:${windowWidth}`);

window.addEventListener("scroll", ScrollColor);
function ScrollColor() {
  console.log(window.scrollY);

  //Stocks
  if (window.scrollY > 200 && window.scrollY < 500 && windowWidth < 768) {
    getStocks.classList.remove("scroll-out");
    getStocks.classList.add("scroll-in");
    getStocksFirstChild.classList.remove("scroll-out-h2");
    getStocksFirstChild.classList.add("scroll-in-h2");
    getStocksLastChild.classList.remove("scroll-out-p");
    getStocksLastChild.classList.add("scroll-in-p");
  } else {
    getStocks.classList.remove("scroll-in");
    getStocks.classList.add("scroll-out");
    getStocksFirstChild.classList.remove("scroll-in-h2");
    getStocksFirstChild.classList.add("scroll-out-h2");
    getStocksLastChild.classList.remove("scroll-in-p");
    getStocksLastChild.classList.add("scroll-out-p");
  }
  //Bootstrap
  if (window.scrollY > 500 && window.scrollY < 800 && windowWidth < 768) {
    getBootstrap.classList.remove("scroll-out");
    getBootstrap.classList.add("scroll-in");
    getBootstrapFirstChild.classList.remove("scroll-out-h2");
    getBootstrapFirstChild.classList.add("scroll-in-h2");
    getBootstrapLastChild.classList.remove("scroll-out-p");
    getBootstrapLastChild.classList.add("scroll-in-p");
  } else {
    getBootstrap.classList.remove("scroll-in");
    getBootstrap.classList.add("scroll-out");
    getBootstrapFirstChild.classList.remove("scroll-in-h2");
    getBootstrapFirstChild.classList.add("scroll-out-h2");
    getBootstrapLastChild.classList.remove("scroll-in-p");
    getBootstrapLastChild.classList.add("scroll-out-p");
  }
  //Algo
  if (window.scrollY > 800 && window.scrollY < 1100 && windowWidth < 768) {
    getAlgo.classList.remove("scroll-out");
    getAlgo.classList.add("scroll-in");
    getAlgoFirstChild.classList.remove("scroll-out-h2");
    getAlgoFirstChild.classList.add("scroll-in-h2");
    getAlgoLastChild.classList.remove("scroll-out-p");
    getAlgoLastChild.classList.add("scroll-in-p");
  } else {
    getAlgo.classList.remove("scroll-in");
    getAlgo.classList.add("scroll-out");
    getAlgoFirstChild.classList.remove("scroll-in-h2");
    getAlgoFirstChild.classList.add("scroll-out-h2");
    getAlgoLastChild.classList.remove("scroll-in-p");
    getAlgoLastChild.classList.add("scroll-out-p");
  }
  //CRUD
  if (window.scrollY > 1100 && window.scrollY < 1400 && windowWidth < 768) {
    getCrud.classList.remove("scroll-out");
    getCrud.classList.add("scroll-in");
    getCrudFirstChild.classList.remove("scroll-out-h2");
    getCrudFirstChild.classList.add("scroll-in-h2");
    getCrudLastChild.classList.remove("scroll-out-p");
    getCrudLastChild.classList.add("scroll-in-p");
  } else {
    getCrud.classList.remove("scroll-in");
    getCrud.classList.add("scroll-out");
    getCrudFirstChild.classList.remove("scroll-in-h2");
    getCrudFirstChild.classList.add("scroll-out-h2");
    getCrudLastChild.classList.remove("scroll-in-p");
    getCrudLastChild.classList.add("scroll-out-p");
  }
}

/* To be added: Put new ids and us a for loop using menuLength to get all the ids of the element inside
and call the fonction
instead of repeating the code for each elements in the div "menu" */
let getMenu = document.getElementById("menu");
let menuLenght = getMenu.children.length;
console.log(menuLenght);
