document.getElementById("yesButton").addEventListener("click", function () {
    const responseText = document.getElementById("responseText");
    responseText.classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function () {
    alert("За ойлголоо. Амжилт хүсье!");
});
