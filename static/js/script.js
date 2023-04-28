const setObj = function(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function(key) {
    return JSON.parse(localStorage.getItem(key))
}

function loadcustomapp() {
    if (!getObj("customapps")) {
        setObj("customapps", [])
    }
    var name = prompt("What should this app be named? (required)")
    var url = prompt("What's this app's url? (required)")
    var icon = prompt("What's this app's icon? (optional)")
    var description = prompt("What's this app's description? (optional)")
   

    if (!name || !url) return alert("All required fields must be filled in")
    if (name.length > 15) return alert("App name is too long (max 30 characters)")

    
    fetch("https://www.uuidtools.com/api/generate/v4")
    .then(response => response.json())
    .then(data => {
        var customapps = getObj("customapps")
        customapps.push(JSON.parse(`{ "title": "${name} (Custom app)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
        setObj("customapps", customapps)
        window.location.href = self.location
    })
    
    
    
    
    
}

function loadcustomgame() {
    if (!getObj("customgames")) {
        setObj("customgames", [])
    }
    var name = prompt("What should this game be named? (required)")
    var url = prompt("What's this game's url? (required)")
    var icon = prompt("What's this game's icon? (optional)")
    var description = prompt("What's this game's description? (optional)")

    if (!name || !url) return alert("All required fields must be filled in")
    if (name.length > 15) return alert("Game name is too long (max 30 characters)")

    
    fetch("https://www.uuidtools.com/api/generate/v4")
    .then(response => response.json())
    .then(data => {
        var customgames = getObj("customapps")
        customgames.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
        setObj("customapps", customgames)
        window.location.href = self.location
    })
    
    
}

function debug() {
    console.log(getObj("customapps"))
}

function clearcustomapps() {
    setObj("customapps", [])
    console.log("Removed all custom apps!")
}

function clearcustomgames() {
    setObj("customgames", [])
    console.log("Removed all custom games!")
}

// https://www.google.com/search?q=
function search(input, template) {
    try {
      // input is a valid URL:
      // eg: https://example.com, https://example.com/test?q=param
      return new URL(input).toString();
    } catch (err) {
      // input was not a valid URL
    }
  
    try {
      // input is a valid URL when http:// is added to the start:
      // eg: example.com, https://example.com/test?q=param
      const url = new URL(`http://${input}`);
      // only if the hostname has a TLD/subdomain
      if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
      // input was not valid URL
    }
  
    // input may have been a valid URL, however the hostname was invalid
  
    // Attempts to convert the input to a fully qualified URL have failed
    // Treat the input as a search query
    return `https://www.google.com/search?q=${encodeURIComponent(input)}`
  }