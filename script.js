document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const discordUsername = document.getElementById('discordUsername').value;
    const inGameUsername = document.getElementById('inGameUsername').value;
    const squadron = document.getElementById('squadron').value;

    const url = 'https://script.google.com/macros/s/AKfycbwgrAxCpHTwLItdAel2sUkk1GEqRCfztoRBihgl4D08VlmRRHyrb-3uss4CaFp-_jwzhA/exec';
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
        const statusElement = document.getElementById('status');
        statusElement.innerText = 'Your application has been submitted successfully! We’ll review it in a few days.';
        statusElement.style.color = 'green';

        // Clear the form and disable auto-fill
        document.getElementById('applicationForm').reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            statusElement.innerText = '';
        }, 5000);
    })
    .catch(error => {
        console.error('Error:', error);
        const statusElement = document.getElementById('status');
        statusElement.innerText = 'There was an error submitting your application. Please try again, or create a ticket on the Discord server.';
        statusElement.style.color = 'red';
    });
});
