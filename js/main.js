const box = document.querySelector("section > div");

box.addEventListener("click", (event) => {
  clearClass();
  let index = event.target.dataset.index;
  document.querySelector(`.image:nth-child(${index})`).classList.add("active");
});

function clearClass() {
  for (let i = 1; i <= 5; ++i) {
    document.querySelector(`.image:nth-child(${i})`).classList.remove("active");
  }
}
