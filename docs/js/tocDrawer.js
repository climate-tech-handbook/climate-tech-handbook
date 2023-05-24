document.addEventListener('DOMContentLoaded', function() {
    var tocButton = document.querySelector('.md-header__button[for="__toc"]');
    var toc = document.querySelector('#__toc');
    var overlay = document.querySelector('.md-overlay'); // Use the existing overlay

    function toggleDrawer() {
        if (toc.classList.contains('md-drawer--open')) {
            toc.classList.remove('md-drawer--open');
            overlay.classList.remove('md-overlay--active');
        } else {
            toc.classList.add('md-drawer--open');
            overlay.classList.add('md-overlay--active');
        }
    }
    
    tocButton.addEventListener('click', toggleDrawer);
    overlay.addEventListener('click', toggleDrawer);
});
