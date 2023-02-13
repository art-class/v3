if (localStorage.getItem("cloaktype") == "clickoff") {
  var originalTab = document.title
  var originalFavicon = document.querySelector("link[rel~='icon']").href
  
  document.addEventListener('visibilitychange', (event) => {
    if (document.title != originalTab) {
      document.title = originalTab
      document.querySelector("link[rel~='icon']").href = originalFavicon
    } else {
      document.title = localStorage.getItem("tabname") || originalTab
      document.querySelector("link[rel~='icon']").href = localStorage.getItem("favicon") || originalTab
    }
  });
} else if (localStorage.getItem("cloaktype") == "normal") {
  document.title = localStorage.getItem("") || "Art Class"
  document.querySelector("link[rel=~'icon']")
}