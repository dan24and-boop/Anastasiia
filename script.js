showBtn.onclick = function () {
    let birthYear = Number(document.getElementById("birthYear").value);
    let text = "";

    for (let year = birthYear; year <= 2026; year++) {
        text += year + " - " + (year - birthYear) + " р.<br>";
    }

    document.getElementById("result").innerHTML = text;
};
