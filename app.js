var btnTheme = document.getElementById("theme");

btnTheme.addEventListener("click", function () {
    var body = document.body;
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    } else {
        body.classList.add("dark");
    }
});
