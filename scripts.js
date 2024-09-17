document.getElementById("launch-btn").addEventListener("click", function() {
    document.getElementById("curtain-container").classList.add("opened");

    // Show welcome message
    setTimeout(function() {
        document.getElementById("welcome-screen").style.opacity = "1";
    }, 3000); // 3 seconds to match curtain opening

    // Redirect to actual website after 6 seconds
    setTimeout(function() {
        window.location.href = "https://www.yourwebsite.com"; // Replace with your actual URL
    }, 6000); // 6 seconds total
});
