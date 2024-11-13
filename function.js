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