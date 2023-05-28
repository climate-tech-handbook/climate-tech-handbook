document.addEventListener('DOMContentLoaded', function() {
    const tocButton = document.getElementById('toc-button');
    const tocDrawer = document.getElementById('toc-drawer');

    tocButton.addEventListener('click', function(e) {
        tocDrawer.classList.toggle('md-drawer--open');
        e.stopPropagation();
    });

    document.addEventListener('click', function(e) {
        if (!tocDrawer.contains(e.target) && !tocButton.contains(event.target)) {
            tocDrawer.classList.remove('md-drawer--open');
        }
    })

    
    
});
