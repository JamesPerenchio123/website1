window.addEventListener('scroll', function() {
    // Get the footer element
    var footer = document.getElementById('footer');
    // Calculate the position of the bottom of the page
    var bottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    // If the bottom of the page is reached, show the footer
    if (bottomOfPage) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }
});
