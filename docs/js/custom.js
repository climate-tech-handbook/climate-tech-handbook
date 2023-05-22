// custom.js

window.onload = function() {
    const url = 'http://localhost:3000/api/rss';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
        })
        .catch(error => console.error('Error:', error));
};
