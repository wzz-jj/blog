const postDetail = document.getElementById('postDetail');
const postId = getParam('id');

if (!postId) {
  postDetail.innerHTML = '<div class="loading">文章不存在</div>';
} else {
  loadPost();
}

function loadPost() {
  const post = getPostById(postId);
  if (!post) {
    postDetail.innerHTML = '<div class="loading">文章不存在</div>';
    document.title = '文章不存在 — 我的博客';
    return;
  }

  document.title = `${post.title} — 我的博客`;

  const html = marked.parse(post.content);
  postDetail.innerHTML = `
    <div class="post-header">
      <h1>${post.title}</h1>
      <div class="post-meta">
        <span>📅 ${formatDate(post.date)}</span>
        <span class="category">${post.category}</span>
      </div>
      <div class="post-tags">
        ${post.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>
    <div class="post-body">${html}</div>
  `;

  // Highlight code blocks
  document.querySelectorAll('.post-body pre code').forEach(block => {
    hljs.highlightElement(block);
  });

  // Load comments
  loadComments();
}

// === Comments ===
function getCommentKey() {
  return `blog_comments_${postId}`;
}

function getComments() {
  try {
    return JSON.parse(localStorage.getItem(getCommentKey()) || '[]');
  } catch {
    return [];
  }
}

function saveComments(comments) {
  localStorage.setItem(getCommentKey(), JSON.stringify(comments));
}

function loadComments() {
  const comments = getComments();
  document.getElementById('commentCount').textContent = comments.length;
  const list = document.getElementById('commentList');
  if (comments.length === 0) {
    list.innerHTML = '<p style="color:var(--text-secondary);font-size:0.9rem;">暂无评论，来抢沙发吧~</p>';
  } else {
    list.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div class="comment-header">
          <span class="comment-name">${escapeHtml(c.name)}</span>
          <span class="comment-date">${c.date}</span>
        </div>
        <div class="comment-body">${escapeHtml(c.content)}</div>
      </div>
    `).join('');
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.getElementById('commentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('commentName').value.trim();
  const content = document.getElementById('commentContent').value.trim();
  if (!name || !content) return;

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const comments = getComments();
  comments.push({ name, content, date: dateStr });
  saveComments(comments);

  document.getElementById('commentName').value = '';
  document.getElementById('commentContent').value = '';
  loadComments();
});
