// create some modals for about us and contact us
//
const id = document.querySelector("#username");
const pw = document.querySelector("#password");

document.querySelectorAll(".open").forEach((element) =>
  element.addEventListener("click", function () {
    document.querySelector("#overlay").classList.add("display");
  })
);
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#overlay").classList.remove("display");
});

document.querySelector(".signin-bar").addEventListener("click", function () {
  document.querySelector(".modal-content").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".modal-content").style.display = "none";
});

document.querySelector(".search-btn").addEventListener("click", function () {
  document.querySelector(".search-modal-content").style.display = "block";
});

document.querySelector(".search-close").addEventListener("click", function () {
  document.querySelector(".search-modal-content").style.display = "none";
});
