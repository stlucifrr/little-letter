const openButton = document.querySelector("#openButton");
const letter = document.querySelector("#letter")

openButton.addEventListener("click", function () {
    console.log("Hehe, yea button's clicked~");

    openButton.classList.add("hidden");
    letter.classList.remove("hidden");
    letter.classList.add("opened");  
});
