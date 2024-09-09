document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const discordUsername = document.getElementById('discordUsername').value;
    const inGameUsername = document.getElementById('inGameUsername').value;
    const squadron = document.getElementById('squadron').value;

    const url = 'https://script.google.com/macros/s/AKfycbxeB-ApdUM047LdPdJyIkb9iKUfRgWEI_QoxdRumH1ilEgYDAz8y8I7uagzuud3dcG9/exec';
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
        statusElement.innerText = 'Your application is pending verification. Please check your direct messages on Discord to verify your application. Make sure your direct messages are open to receive notifications regarding your application status.';
        statusElement.style.color = 'rgb(76, 175, 80)';

        document.getElementById('applicationForm').reset();

        setTimeout(() => {
            statusElement.innerText = '';
        }, 10000);
    })
    .catch(error => {
        console.error('Error:', error);
        const statusElement = document.getElementById('status');
        statusElement.innerText = 'There was an error submitting your application. Please try again, or create a ticket on the Discord server regarding this issue.';
        statusElement.style.color = 'red';

        setTimeout(() => {
            statusElement.innerText = '';
        }, 30000);
    });
});
