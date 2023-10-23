document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.id === "clear") {
                display.value = "";
            } else if (button.id === "equals") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else if (button.id === "dot") {
                // Check for multiple decimal points
                if (display.value.indexOf(".") === -1) {
                    display.value += button.textContent;
                }
            } else {
                display.value += button.textContent;
            }
        });
    });
});
