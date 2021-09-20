const buton = document.querySelector("#submit");
const maintitle = document.querySelector(".main-title");
buton.addEventListener("click", function (event) {
  console.log(event.type);
  maintitle.classList.toggle("spectacular");
});
