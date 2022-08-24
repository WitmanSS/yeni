const show = document.querySelector(".show");
const keyContainer = document.querySelector(".key-container");
if (!keyContainer.innerText) {
  keyContainer.style.display =
   "none";
}
window.addEventListener("keydown", (e) => {
  keyContainer.style.display = "block";
  show.innerText = `You pressed ${e.key}`;
  keyContainer.innerText = e.keyCode;
});
