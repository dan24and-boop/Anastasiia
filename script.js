let btn = document.getElementById("showBtn");

btn.onclick = function () {
    let birthYear = Number(document.getElementById("birthYear").value);
    let result = document.getElementById("result");
    result.innerHTML = "";

    for (let year = birthYear; year <= 2026; year++) {
        let age = year - birthYear;
        let word = "років";

        if (age % 10 == 1 && age != 11) {
            word = "рік";
        } else if (age % 10 >= 2 && age % 10 <= 4 && (age < 12 || age > 14)) {
            word = "роки";
        }

        result.innerHTML += year + " - " + age + " " + word + "<br>";
    }
};
