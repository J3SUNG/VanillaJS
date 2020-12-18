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
  title.style.color = "green";
  title.style.fontSize = "50px";
  go.style.color = "red";
  go.style.fontSize = "50px";
}

title.addEventListener("click", handleClick);
