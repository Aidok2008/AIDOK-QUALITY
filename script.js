document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const body = document.querySelector('body');

    logo.addEventListener('click', function() {
        body.classList.toggle('new-style');
    });
});

