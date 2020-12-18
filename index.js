console.log(window);
console.log(window.document);
console.log(document);
console.log(document.getElementById("title"));

const title = document.getElementById("title");
title.innerHTML = "Hi";
title.innerHTML += "  JavaScript!<br>";
title.innerText += "Click here";

const go = document.querySelector(".go");
go.innerHTML = "Blog!";
go.href = "https://j3sung.tistory.com/";
go.target = "_blank";

function handleClick() {
  // const currentColor = title.style.color;
  // if (currentColor === "green") {
  //   title.style.color = "purple";
  // } else {
  //   title.style.color = "green";
  // }
  // title.style.fontSize = "50px";
  // go.style.color = "red";
  // go.style.fontSize = "50px";

  // const currentClass = title.className;
  // if (currentClass !== "clicked") {
  //   title.className = "clicked";
  // } else {
  //   title.className = "";
  // }

  // const hasClass = title.classList.contains("clicked");
  // if (!hasClass) {
  //   title.classList.add("clicked");
  // } else {
  //   title.classList.remove("clicked");
  // }

  title.classList.toggle("clicked");
}

title.addEventListener("click", handleClick);
