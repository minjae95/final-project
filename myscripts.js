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

document.querySelector("#accountCreate").addEventListener("click", function () {
  document.querySelector("#formCreate").style.display = "block";
  document.querySelector("#formLogin").style.display = "none";
});

document.querySelector("#haveAccount").addEventListener("click", function () {
  document.querySelector("#formCreate").style.display = "none";
  document.querySelector("#formLogin").style.display = "block";
});

document.querySelector("#closeBtn").addEventListener("click", function () {
  document.querySelector(".modal-content").style.display = "none";
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
