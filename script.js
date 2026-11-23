let showBtn = document.querySelector("#showBtn");
let birthYear = document.querySelector("#birthYear");
let box = document.querySelector("#result");

showBtn.addEventListener("click", function(){
    let result = "";
    let year = Number(birthYear.value);

    if (year < 1900 || year > 2026){
        box.innerHTML = "Помилка! Введіть рік від 1900 до 2026";
        return;
    }

    for (let i = year; i <= 2026; i++){
        result += `<div>${i} - ${i - year} р.</div>`;
    }
    box.innerHTML = result;
})
