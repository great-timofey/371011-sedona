let form = document.querySelector(".trip-form");
let showButton = document.querySelector(".trip-button-show");
let submitButton = document.querySelector(".trip-button-submit");
let arrivalDate = document.querySelector("#arrival-date-form");
let departureDate = document.querySelector("#departute-date-form");
let adultsCount = document.querySelector("#adults-count-form");
let kidsCount = document.querySelector("#kids-count-form");

showButton.addEventListener("click", function(e) {
  e.preventDefault();
  if (form.classList.contains("trip-form-show")) {
    form.classList.remove("trip-form-show");
    form.classList.add("trip-form-close");
    form.classList.remove("trip-form-error");
  }
  else {
    form.classList.remove("trip-form-close");
    form.classList.add("trip-form-show");
    form.classList.remove("trip-form-error");
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (!arrivalDate.value || !departureDate.value || !adultsCount || !kidsCount) {
    form.classList.remove("trip-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("trip-form-error");
  }
});

