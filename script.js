document.getElementById("Explore").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default jump behavior

    document.querySelector("#products").scrollIntoView({
        behavior: "smooth", // Enables smooth scrolling
        block: "start"
    });
});