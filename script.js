document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("background-video");

    if (video) {
        // Mute the video initially (important for autoplay)
        video.muted = true;

        // Listen for 'canplay' to ensure video can start playing
        video.addEventListener("canplay", function() {
            console.log("Video is ready to play.");
            video.play().catch(function(error) {
                console.error("Error starting video playback:", error);
            });
        });

        // Handle video loading errors
        video.addEventListener("error", function(e) {
            console.error("Error loading video:", e);
        });

        // Use a small delay to make sure the video plays after page load
        window.addEventListener("load", function() {
            // Use a small delay to give the browser time to fully render the page
            setTimeout(function() {
                video.muted = false; // Unmute the video after the page has fully loaded
                video.play().catch(function(error) {
                    console.error("Video playback failed:", error); // Log any error if the video fails to play
                });
            }, 500); // Delay for 500ms to ensure everything is loaded
        });
    }
});

// Handle 'Click to Enter' button functionality on index.html
document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById("enter-button");
    if (enterButton) {
        enterButton.addEventListener("click", function() {
            // Redirect to the main page after clicking 'Click to Enter'
            window.location.href = "main.html";  // Adjust the path if necessary
        });
    }
});