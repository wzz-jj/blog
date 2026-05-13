let allPosts = [];
let currentCategory = null;
let currentTag = null;

const postList = document.getElementById('postList');
const categoryList = document.getElementById('categoryList');
const tagCloud = document.getElementById('tagCloud');
const searchInput = document.getElementById('searchInput');
const filterLabel = document.getElementById('filterLabel');
const clearFilter = document.getElementById('clearFilter');
const noResults = document.getElementById('noResults');

function getCategories() {
  return [...new Set(allPosts.map(p => p.category))].sort();
}

function getTags() {
  const tags = new Set();
  allPosts.forEach(p => p.tags.forEach(t => tags.add(t)));
  return [...tags].sort();
}

function renderCategories() {
  const cats = getCategories();
  categoryList.innerHTML = cats.map(c =>
    `<li class="${c === currentCategory ? 'active' : ''}" data-category="${c}">${c}</li>`
  ).join('');
  categoryList.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      currentCategory = li.dataset.category === currentCategory ? null : li.dataset.category;
      currentTag = null;
      renderAll();
    });
  });
}

function renderTagCloud() {
  const tags = getTags();
  tagCloud.innerHTML = tags.map(t =>
    `<span class="tag-item ${t === currentTag ? 'active' : ''}" data-tag="${t}">${t}</span>`
  ).join('');
  tagCloud.querySelectorAll('.tag-item').forEach(el => {
    el.addEventListener('click', () => {
      currentTag = el.dataset.tag === currentTag ? null : el.dataset.tag;
      currentCategory = null;
      renderAll();
    });
  });
}

function filterPosts() {
  let filtered = [...allPosts];
  const query = searchInput.value.trim().toLowerCase();
  if (currentCategory) {
    filtered = filtered.filter(p => p.category === currentCategory);
  }
  if (currentTag) {
    filtered = filtered.filter(p => p.tags.includes(currentTag));
  }
  if (query) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query)
    );
  }
  return filtered;
}

function renderPosts() {
  const filtered = filterPosts();
  if (filtered.length === 0) {
    postList.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    postList.innerHTML = filtered.map(p => `
      <article class="post-card">
        <h2><a href="post.html?id=${p.id}">${p.title}</a></h2>
        <div class="post-meta">
          <span>📅 ${formatDate(p.date)}</span>
          <span class="category" data-cat="${p.category}">${p.category}</span>
        </div>
        <p class="post-summary">${p.summary}</p>
        <div class="post-tags">
          ${p.tags.map(t => `<span data-tag="${t}">${t}</span>`).join('')}
        </div>
      </article>
    `).join('');

    // Bind tag clicks on cards
    postList.querySelectorAll('.post-tags span').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        currentTag = el.dataset.tag;
        currentCategory = null;
        renderAll();
      });
    });
    // Bind category clicks on cards
    postList.querySelectorAll('.post-meta .category').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        currentCategory = el.dataset.cat;
        currentTag = null;
        renderAll();
      });
    });
  }
}

function updateFilterLabel() {
  if (currentCategory) {
    filterLabel.textContent = `📂 分类: ${currentCategory}`;
    clearFilter.style.display = 'inline-block';
  } else if (currentTag) {
    filterLabel.textContent = `🏷 标签: ${currentTag}`;
    clearFilter.style.display = 'inline-block';
  } else {
    filterLabel.textContent = '📄 全部文章';
    clearFilter.style.display = 'none';
  }
}

function renderAll() {
  updateFilterLabel();
  renderCategories();
  renderTagCloud();
  renderPosts();
}

// Search input
searchInput.addEventListener('input', () => renderPosts());

// Clear filter
clearFilter.addEventListener('click', () => {
  currentCategory = null;
  currentTag = null;
  searchInput.value = '';
  renderAll();
});

// Init
(() => {
  allPosts = fetchPosts();
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  renderAll();
})();
