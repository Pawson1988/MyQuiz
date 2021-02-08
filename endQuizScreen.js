const scoreSpan = document.querySelector(".scoreSpan");

const endScore = JSON.parse(localStorage.getItem("endScore"));

scoreSpan.textContent = endScore;