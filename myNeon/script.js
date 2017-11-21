var button = document.querySelector("button");

button.addEventListener("click", function () {
    if (this.textContent == "Włącz") {
        this.textContent = "Wyłącz";
    } else {
        this.textContent = "Włącz";
    }
    const letters = document.querySelector("ul");

    letters.classList.toggle("off");
});
