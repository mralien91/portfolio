  
  
  
  async function loadPage(page) {
      const response = await fetch(page);
      const html = await response.text();
      document.getElementById("content").innerHTML = html;

      // update URL without reload
      history.pushState({}, "", page);
    }
    loadPage("home.html")
    // Handle back/forward navigation
window.addEventListener("beforeunload", () => {
  history.replaceState({}, "", "/"); 
});
