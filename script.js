document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const discordUsername = document.getElementById('discordUsername').value;
    const inGameUsername = document.getElementById('inGameUsername').value;
    const squadron = document.getElementById('squadron').value;

    const url = 'https://script.google.com/macros/s/AKfycbzLDNU198ypV-KUqO3-Y3-lpGAeZZrkFTbOb7UqaMAailJ-kP9NSL1rym1e9CMbaZS-eA/exec';
    const data = new URLSearchParams({
        discordUsername: discordUsername,
        inGameUsername: inGameUsername,
        squadron: squadron
    });

    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('status').innerText = result;
        document.getElementById('applicationForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('status').innerText = 'There was an error submitting your application. Please try again.';
    });
});
