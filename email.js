document.addEventListener("DOMContentLoaded", function () {
    const emailUsLink = document.getElementById("email-us-link");

    emailUsLink.addEventListener("click", function (event) {
        event.preventDefault();
        sendEmail();
    });

    function sendEmail() {
        window.location.href = "mailto:wt.remyshub@gmail.com";
    }
});
