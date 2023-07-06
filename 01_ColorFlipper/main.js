const button = document.getElementById("colorButton");

const changeColor = () => {
  const bgColorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "gray",
  ];
  let nextColor = bgColorList[Math.floor(Math.random() * bgColorList.length)];
  let nowColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = nextColor;
  document.querySelector(".newColor").textContent =
    document.body.style.backgroundColor;
};

button.addEventListener("click", changeColor);
