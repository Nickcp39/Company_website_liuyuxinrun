/* scripts.js */

/* 定义函数，用于从外部HTML文件加载内容并插入指定元素 */
function loadContent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

/* 当DOM内容加载完成时执行 */
document.addEventListener("DOMContentLoaded", function() {
    /* 动态加载导航栏和页脚内容 */
    loadContent("navbar", "partials/header.html");
    loadContent("footer", "partials/footer.html");

    /* 根据当前路径加载对应的主要内容 */
    const path = window.location.pathname;
    if (path.endsWith("about.html")) {
        loadContent("main-content", "partials/about_content.html");
    } else if (path.endsWith("products.html")) {
        loadContent("main-content", "partials/products_content.html");
    } else if (path.endsWith("contact.html")) {
        loadContent("main-content", "partials/contact_content.html");
    } else {
        loadContent("main-content", "partials/home_content.html");
    }
});
