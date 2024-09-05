window.onload = function () {
        // Показать модальное окно при загрузке страницы
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    const watchVideoBtn = document.getElementById('watch-video-btn');

    watchVideoBtn.onclick = function () {
        modal.style.display = "none";
    }
}