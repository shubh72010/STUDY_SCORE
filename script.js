document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';
        }, { once: true });
        mainContent.classList.remove('hidden');
    }, 2000);
});
