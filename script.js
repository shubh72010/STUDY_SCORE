document.addEventListener('DOMContentLoaded', () => {
    // --- Loading Screen Logic ---
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';
        }, { once: true });
        mainContent.classList.remove('hidden');
    }, 2000);

    // --- Hamburger Menu Logic ---
    const hamburgerMenuButton = document.getElementById('hamburger-menu');
    const mainNavigation = document.getElementById('main-navigation');

    hamburgerMenuButton.addEventListener('click', () => {
        mainNavigation.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked (optional but good UX)
    mainNavigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNavigation.classList.contains('active')) {
                mainNavigation.classList.remove('active');
            }
        });
    });
});
