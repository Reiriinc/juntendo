document.addEventListener("DOMContentLoaded", () => {
    // --- アコーディオン ---
    const items = document.querySelectorAll('.faq-item');

    // 初期表示：active にだけ高さを設定
    items.forEach(item => {
        const answer = item.querySelector('.faq-answer');

        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

        // クリックで開閉
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // 1つだけ開く場合は一旦全て閉じる
            items.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // クリックしたものを開く/閉じる
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
