// ローディング画面を非表示にしてサイトを表示
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.transition = 'opacity 1s ease, visibility 0s 1s'; // アニメーションをスムーズに
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }, 1500); // ローディング画面を1.5秒間表示
});
