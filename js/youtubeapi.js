// 差し替えが必要
const apiKey = "AIzaSyAkVKUlEPi_h4oF8KzY1eX8sfor4e7vza4"; // ← あなたのAPIキーをここに入れる
const channelId = "UCCkcNNVdspO3gQvVC4I8uIg"; // 暮らしいきいきジュンテンドーのチャンネルID

async function loadLatestVideo() {
    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;

    try {
        const res = await fetch(apiURL);
        const data = await res.json();

        if (!data.items || data.items.length === 0) {
            document.getElementById("latest-video").textContent = "動画が見つかりませんでした。";
            return;
        }

        const video = data.items[0];
        const videoId = video.id.videoId;

        document.getElementById("latest-video").innerHTML = `
          <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
        `;
    } catch (error) {
        console.error("Error fetching video:", error);
        document.getElementById("latest-video").textContent = "動画の取得に失敗しました。";
    }
}

loadLatestVideo();