const navbarDropdownElements = document.querySelectorAll(
  ".navbar .dropdown-item-list"
);
const menuDropdownLists = document.querySelectorAll(".icon-cell .dropdown");
const dottedIconBtns = document.querySelectorAll(".icon-cell-btn");

const dottedDropdown = document.querySelectorAll(".icon-cell .dropdown");

const stateDropdownBtns = document.querySelectorAll(".state-dropdown-btn");
const stateDropdownLists = document.querySelectorAll(".state-dropdown-list");
const stateDropdownItems = document.querySelectorAll(
  ".state-dropdown-list button"
);
const trElements = document.querySelectorAll(".details-table tbody tr");
const openSidebarBtns = document.querySelectorAll(
  ".details-table .attatch-btn"
);
const overlayElement = document.querySelector(".overlay");
const closeOverlayBtn = document.querySelector(".close-icon");
const itemDetails = document.querySelector(".item-details");
const expandController = document.querySelector(".expand-controller");
const menuBtn = document.querySelector(".menu-btn");
const navbarList = document.querySelector(".navbar .nav-list");
const closeMenuBtn = document.querySelector(".close-btn");
const selectElements = document.querySelectorAll(".select-list");
const openSelectElements = document.querySelectorAll(".value");
const optionElements = document.querySelectorAll(".select-list li");

// stop propagation function for multiple elements
function stopPropElements(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}

//dropdown for state table cell
stateDropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(this.dataset["color"]);
    console.log(this.parentElement.parentElement.previousElementSibling);
    this.parentElement.parentElement.previousElementSibling.innerHTML =
      this.innerText + `<i class="fa-solid fa-caret-down"></i>`;
    this.parentElement.parentElement.previousElementSibling.style.backgroundColor =
      this.dataset["color"];
  });
});

// stopping propagation for multiple elements in one row
stopPropElements(dottedIconBtns);
stopPropElements(stateDropdownBtns);
stopPropElements(stateDropdownLists);
stopPropElements(menuDropdownLists);

itemDetails.addEventListener("click", (e) => {
  e.stopPropagation();
});

// open sidebar
openSidebarBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    overlayElement.classList.toggle("show");
  });
});

// open item details when click on any row in the table
trElements.forEach((row) => {
  row.addEventListener("click", function () {
    overlayElement.classList.toggle("show");
  });
});

closeOverlayBtn.addEventListener("click", function () {
  overlayElement.classList.toggle("show");
});

overlayElement.addEventListener("click", function () {
  overlayElement.classList.toggle("show");
});

expandController.addEventListener("click", function () {
  this.nextElementSibling.classList.toggle("expand");
  this.classList.toggle("rotate");
});

// open sidebar menu
menuBtn.addEventListener("click", function () {
  navbarList.classList.add("expand");
});

// closing sidebar menu
closeMenuBtn.addEventListener("click", function () {
  navbarList.classList.remove("expand");
});

openSelectElements.forEach((element) => {
  element.addEventListener("click", function () {
    // close all other select elements when click on select element
    selectElements.forEach((select) => {
      select.classList.remove("show");
    });
    this.children[2].classList.toggle("show");
  });
});

// close select element when click on outside the selecet elemet
document.addEventListener("click", ({ target }) => {
  if (!target.matches(".value")) {
    selectElements.forEach((element) => {
      element.classList.remove("show");
    });
  }
  if (!target.matches(".icon-cell-btn")) {
    menuDropdownLists.forEach((element) => {
      element.classList.remove("show");
    });
  }

  //   if (
  //     !target.matches(".close-btn") ||
  //     !target.matches(".nav-list") ||
  //     !target.matches(".menu-btn")
  //   ) {
  //     navbarList.classList.remove("expand");
  //     console.log("matched");
  //     console.log(navbarList);
  //     console.log(target);
  //   } else {
  //     console.log("not matched");
  //   }
});

optionElements.forEach((option) => {
  option.addEventListener("click", function () {
    this.parentElement.previousElementSibling.previousElementSibling.innerText =
      this.innerText;
  });
});

dottedIconBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("show");
  });
});
