let showBtn = document.querySelector("#showBtn");
let birthYear = document.querySelector("#birthYear");
let box = document.querySelector("#result");

showBtn.addEventListener("click", function(){
    let result = "";
    let year = Number(birthYear.value);
    for (let i = year; i <= 2026; i++){
        result += `${i} - ${i - year} р.<br>`;
    }
    box.innerHTML = result;
})
