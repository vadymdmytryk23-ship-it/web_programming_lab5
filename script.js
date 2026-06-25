document.addEventListener("DOMContentLoaded", function () {

    const nameInput = document.getElementById("nameInput");
    const showBtn = document.getElementById("showBtn");
    const clearBtn = document.getElementById("clearBtn");
    const result = document.getElementById("result");

    showBtn.addEventListener("click", function () {

        const userName = nameInput.value.trim();

        if (userName === "") {
            result.textContent = "Будь ласка, введіть ім’я.";
            result.style.color = "red";
        } else {
            result.textContent = "Привіт, " + userName + "!";
            result.style.color = "green";
        }
    });

    clearBtn.addEventListener("click", function () {
        nameInput.value = "";
        result.textContent = "Тут з’явиться результат.";
        result.style.color = "black";
    });

});
