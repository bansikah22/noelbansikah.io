// Fetch Articles from Dev.to
async function fetchArticles() {
    const username = "bansikah";
    const response = await fetch(`https://dev.to/api/articles?username=${username}&per_page=3`);
    const articles = await response.json();
    const featuredArticle = document.getElementById("featured-article");
    const articleList = document.getElementById("article-list");

    if (articles.length > 0) {
        const featured = articles[0];
        featuredArticle.innerHTML = `
            <h3>${featured.title}</h3>
            <p>${featured.description || "No description available"}</p>
            <a href="${featured.url}" target="_blank">Read More</a>
        `;
    }

    articles.slice(1, 3).forEach(article => {
        const card = document.createElement("div");
        card.classList.add("article-card");
        card.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || "No description available"}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        articleList.appendChild(card);
    });
}

// Fetch Projects from GitHub
async function fetchProjects() {
    const username = "bansikah22";
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    const projects = await response.json();
    const projectList = document.getElementById("project-list");
    
    projects.slice(0, 6).forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description || "No description available"}</p>
            <a href="${project.html_url}" target="_blank">View on GitHub</a>
        `;
        projectList.appendChild(card);
    });
}

fetchArticles();
fetchProjects();

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.onscroll = () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
};

backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Hamburger Menu Toggle and Nav Link Click
const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navContainer.classList.remove("active");
    });
});