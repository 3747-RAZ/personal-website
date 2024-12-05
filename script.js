async function getLatestVideos(channelURL) {
    try {
        // Fetch the channel page HTML
        const response = await fetch(channelURL);
        const html = await response.text();

        // Create a DOM parser
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Extract video data from the DOM
        const videoElements = doc.querySelectorAll("a#video-title");
        const videos = Array.from(videoElements).map(video => ({
            title: video.getAttribute("title"),
            url: `https://www.youtube.com${video.getAttribute("href")}`,
        }));

        // Log the latest videos
        console.log(videos);
    } catch (error) {
        console.error("Error fetching videos:", error);
    }
}

// Replace with your YouTube channel URL
getLatestVideos("https://youtube.com/@raz-or-lg?si=_vDezb_vj4QSpElV");



// Optional JS for Interactive Effects
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".banner-title");

    // Add a hover effect to the title
    title.addEventListener("mouseover", () => {
        title.style.color = "#ffffff";
        title.style.textShadow = "0 4px 6px rgba(255, 255, 255, 0.7), 0 0 20px #ffffff";
    });

    title.addEventListener("mouseout", () => {
        title.style.color = "#ff0033";
        title.style.textShadow = "0 4px 6px rgba(255, 0, 51, 0.7), 0 0 20px #ff0033";
    });
});
