// 差し替えが必要
const apiKey = "AIzaSyB9vodCntBd2FXwB1uvxMVoivw09U-0R4Y"; // ← あなたのAPIキーをここに入れる
const channelId = "UCCkcNNVdspO3gQvVC4I8uIg"; // 暮らしいきいきジュンテンドーのチャンネルID

async function loadLatestVideo() {
    // type=video を付けて必ず動画のみ取得（playlistやchannelを除外）
    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5&type=video`;

    // API障害・キー制限時のフォールバック（アップロード動画プレイリスト）
    const uploadsPlaylistId = channelId.replace(/^UC/, 'UU');
    const fallbackEmbed = () => {
        document.getElementById("latest-video").innerHTML = `
          <iframe src="https://www.youtube.com/embed?listType=playlist&list=${uploadsPlaylistId}" allowfullscreen></iframe>
        `;
    };

    try {
        const res = await fetch(apiURL);
        const data = await res.json();

        if (!res.ok) {
            console.error('YouTube API error:', data);
            return fallbackEmbed();
        }

        const items = Array.isArray(data.items) ? data.items : [];
        const itemWithVideo = items.find(it => it && it.id && it.id.videoId);
        const videoId = itemWithVideo ? itemWithVideo.id.videoId : null;

        if (!videoId) {
            console.warn('No videoId found in API response, using playlist fallback.');
            return fallbackEmbed();
        }

        document.getElementById("latest-video").innerHTML = `
          <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
        `;
    } catch (error) {
        console.error("Error fetching video:", error);
        fallbackEmbed();
    }
}

loadLatestVideo();