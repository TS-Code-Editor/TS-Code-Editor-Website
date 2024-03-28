function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('MainContent').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}