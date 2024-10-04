// JavaScript to modify the DOM
document.getElementById('changeTextButton')
    .addEventListener('click', function () {
        const paragraph = document.getElementById('text');
        paragraph.textContent = 'The text has been changed!';
        paragraph.style.color = 'red'; // Changing color with JS
    });