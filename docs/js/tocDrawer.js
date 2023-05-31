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

    // THIS IS A TEMPORARY WORKAROUND. THE <EARTH> image uses href="." so no popstate occurs
    // Add some of the other links use "./"
    // document.querySelectorAll('a[href="/"]').forEach(function(link) {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault(); // prevent the default navigation
    
    //         location.href = this.href; // navigate to the link's href
    
    //         // ensure navigation to homepage is completed before refresh
    //         window.addEventListener('popstate', function onPopState() {
    //             window.removeEventListener('popstate', onPopState); // remove this event listener
    //             console.log("reloading")
    //             location.reload(); // reload the page
    //         });
    //     });
    // });
});
