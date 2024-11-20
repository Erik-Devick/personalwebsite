function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        document.getElementById("confirmation").style.display = "block";

        setTimeout(function() {
            document.getElementById("confirmation").style.display = "none"
        }, 2000);
    }).catch(function(error) {
        console.error("Copy Failed", error)
    });
}

async function fetchLeetCodeStats() {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/erik_devick`);
    const data = await response.json();

    // Update the counter
    document.getElementById('counter').innerText = data.totalSolved;
}

fetchLeetCodeStats()