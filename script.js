const birthYearInput = document.getElementById("birthYear");
const showBtn = document.getElementById("showBtn");
const result = document.getElementById("result");

// Правильне слово: 1 рік, 2 роки, 5 років
function getYearWord(age) {
    const lastTwo = age % 100;
    const last = age % 10;

    if (lastTwo >= 11 && lastTwo <= 14) {
        return "років";
    }
    if (last === 1) {
        return "рік";
    }
    if (last >= 2 && last <= 4) {
        return "роки";
    }
    return "років";
}

showBtn.addEventListener("click", function () {
    const birthYear = Number(birthYearInput.value);
    const currentYear = new Date().getFullYear();

    result.innerHTML = "";

    if (!birthYear || birthYear > currentYear) {
        result.textContent = "Введіть правильний рік народження";
        return;
    }

    for (let year = birthYear; year <= currentYear; year++) {
        const age = year - birthYear;
        const p = document.createElement("p");
        p.textContent = year + " - " + age + " " + getYearWord(age);
        result.appendChild(p);
    }
});
