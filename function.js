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
    const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/erik_devick`);
    const data = await response.json();

    console.log(data.rank)
    let rank = data.ranking
    rank = Number(rank)
    rank = rank.toLocaleString()
    document.getElementById('counter').innerText = data.totalSolved;
    document.getElementById('rank').innerText = rank;
}

//Doesnt work when going from projects to home

fetchLeetCodeStats()
