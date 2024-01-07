const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for (let index = 0; index < 5; index++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/pic${index + 1}.jpg`);
  newImage.setAttribute("alt", `images/pic${index + 1}.jpg`);
  newImage.onclick = function(event) {
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
  };
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(event) {
  const attribute = btn.getAttribute("class");
  const isDark = attribute === "dark";
  btn.setAttribute("class", !isDark ? "dark" : "light");
  btn.textContent = !isDark ? "Darken" : "Lighten";
  overlay.style.backgroundColor = !isDark
    ? "rgba(0, 0, 0, 0)"
    : "rgba(0, 0, 0, 0.5)";
};
