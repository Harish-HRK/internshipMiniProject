// 1. Sample video data (replace URLs + titles with real client work)
const videos = [
  {
    title: "Fashion Reel – eCommerce Brand",
    category: "ecommerce",
    type: "Short-form",
    link: "https://www.youtube.com/embed/ScMzIvxBSi4",
    thumb: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg"
  },
  {
    title: "YouTube Vlog – Long-form Storytelling",
    category: "long",
    type: "Long-form",
    link: "https://www.youtube.com/embed/ysz5fJ1v7HU",
    thumb: "https://img.youtube.com/vi/ysz5fJ1v7HU/hqdefault.jpg"
  },
  {
    title: "Gaming Montage – FPS Highlights",
    category: "gaming",
    type: "Gaming",
    link: "https://www.youtube.com/embed/XHOmBV4js_E",
    thumb: "https://img.youtube.com/vi/XHOmBV4js_E/hqdefault.jpg"
  },
  {
    title: "Football Hype Edit",
    category: "football",
    type: "Sports",
    link: "https://www.youtube.com/embed/5qap5aO4i9A",
    thumb: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg"
  },
  {
    title: "Cinematic Color Grading Showcase",
    category: "color",
    type: "Color Grading",
    link: "https://www.youtube.com/embed/jNQXAC9IVRw",
    thumb: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg"
  },
  {
    title: "Anime AMV Edit",
    category: "anime",
    type: "Anime",
    link: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    thumb: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg"
  },
  {
    title: "Short Ad – App Launch",
    category: "ads",
    type: "Ad",
    link: "https://www.youtube.com/embed/oUFJJNQGwhk",
    thumb: "https://img.youtube.com/vi/oUFJJNQGwhk/hqdefault.jpg"
  },
  {
    title: "Brand Documentary Snippet",
    category: "documentary",
    type: "Documentary",
    link: "https://www.youtube.com/embed/Ke90Tje7VS0",
    thumb: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg"
  },
  {
    title: "Short-form Reel – Product Highlight",
    category: "short",
    type: "Short-form",
    link: "https://www.youtube.com/embed/sBws8MSXN7A",
    thumb: "https://img.youtube.com/vi/sBws8MSXN7A/hqdefault.jpg"
  }
];

const videoGrid = document.getElementById("videoGrid");
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightboxVideo");
const closeLightbox = document.getElementById("closeLightbox");

// 2. Render cards from data
function createVideoCard(video) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.dataset.category = video.category;
  card.dataset.link = video.link;

  card.innerHTML = `
    <div class="video-thumb">
      <img src="${video.thumb}" alt="${video.title}" loading="lazy" />
      <div class="play-badge">
        <span>▶</span>
        <span>Play</span>
      </div>
    </div>
    <div class="video-info">
      <p class="video-title">${video.title}</p>
      <p class="video-meta">${video.type} · ${video.category}</p>
    </div>
  `;

  card.addEventListener("click", () => openLightbox(video.link));
  return card;
}

function renderVideos(filter = "all") {
  videoGrid.innerHTML = "";
  const filtered = filter === "all"
    ? videos
    : videos.filter(v => v.category === filter);

  filtered.forEach(video => {
    videoGrid.appendChild(createVideoCard(video));
  });
}

// 3. Filter button handling
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    renderVideos(filter);
  });
});

// 4. Lightbox controls
function openLightbox(link) {
  lightbox.classList.remove("hidden");
  lightboxVideo.src = link + "?autoplay=1";
}

function closeVideoLightbox() {
  lightbox.classList.add("hidden");
  lightboxVideo.src = "";
}

closeLightbox.addEventListener("click", closeVideoLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeVideoLightbox();
});

// 5. Initial render
renderVideos();
