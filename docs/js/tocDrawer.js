// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the TOC button and the TOC drawer
    var tocButton = document.querySelector('.md-header__button[for="__toc"]');
    var toc = document.querySelector('#__toc');
    
    // When the TOC button is clicked...
    tocButton.addEventListener('click', function() {
        // If the TOC drawer is currently open...
        if (toc.classList.contains('md-drawer--open')) {
            // Close it by removing the 'md-drawer--open' class
            toc.classList.remove('md-drawer--open');
        } else {
            // Otherwise, open it by adding the 'md-drawer--open' class
            toc.classList.add('md-drawer--open');
        }
    });
});
