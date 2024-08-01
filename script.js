document.getElementById('toggle-button').addEventListener('click', function() {
    var body = document.body;
    var img = document.getElementById('toggle-image');

    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        img.src = 'night.gif';  // Replace with the path to your dark mode image
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        img.src = 'sun.gif';  // Replace with the path to your light mode image
    }
});
