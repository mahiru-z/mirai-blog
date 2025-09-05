const posts = [
  {
    title: "2212年の日本人とは誰か",
    date: "2212-09-01",
    tags: ["未来", "人口", "技術"],
    content: "自動生成人間による国家再構築の可能性について考察します。"
  },
  {
    title: "AIによる都市設計の未来",
    date: "2212-09-05",
    tags: ["都市", "AI", "設計"],
    content: "スマートシティの進化と人間の快適性の関係を探ります。"
  }
];

function populateSelectors() {
  const years = [...new Set(posts.map(p => p.date.slice(0, 4)))];
  const months = [...new Set(posts.map(p => p.date.slice(5, 7)))];

  const yearSelect = document.getElementById("yearSelect");
  const monthSelect = document.getElementById("monthSelect");

  years.forEach(y => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  });

  months.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    monthSelect.appendChild(opt);
  });
}

function filterPosts() {
  const year = document.getElementById("yearSelect").value;
  const month = document.getElementById("monthSelect").value;
  const keyword = document.getElementById("keywordInput").value.toLowerCase();
  const tag = document.getElementById("tagInput").value.toLowerCase();

  const filtered = posts.filter(p => {
    const postYear = p.date.slice(0, 4);
    const postMonth = p.date.slice(5, 7);
    const matchDate = postYear === year && postMonth === month;
    const matchKeyword = p.title.toLowerCase().includes(keyword) || p.content.toLowerCase().includes(keyword);
    const matchTag = p.tags.some(t => t.toLowerCase().includes(tag));
    return matchDate && matchKeyword && matchTag;
  });

  renderPosts(filtered);
}

function renderPosts(postList) {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";
  postList.forEach(p => {
    const article = document.createElement("article");
    article.innerHTML = `<h3>${p.title}</h3><p><em>${p.date}</em></p><p>${p.content}</p>`;
    container.appendChild(article);
  });
}

populateSelectors();
renderPosts(posts);