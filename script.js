// Display a message when the page loads

console.log("Portfolio loaded successfully!");


// Smooth navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});