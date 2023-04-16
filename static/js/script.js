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
    var customapps = getObj("customapps")
    var name = prompt("What should this app be named? (required)")
    var url = prompt("What's this app's url? (required)")
    var id = prompt("What's this app's ID? (required)")
    var icon = prompt("What's this app's icon? (optional)")
    var description = prompt("What's this app's description? (optional)")

    if (!name || !url || !id) return alert("All required fields must be filled in")
    if (name.length > 15) return alert("App name is too long (max 30 characters)")

    if (id.includes(" ")) return alert("App id cannot contain spaces")
    
    apps.forEach(app => {
        if (app.id == id) localStorage.setItem("conflict", true);
    })

    if (localStorage.getItem("conflict")) {
        console.log("uhoh something went wrong!!")
        localStorage.removeItem("conflict")
        return;
    } else {
        console.log("everything is good!!")
        localStorage.removeItem("conflict")
    }

    customapps.push(JSON.parse(`{ "title": "${name} (Custom app)", "url": "${url}", "id": "${id}", "image": "${icon}", "description": "${description}" }`))
    setObj("customapps", customapps)
    console.log("added custom app!1!!!11!")
    window.location.href = self.location
    
    
    
    
}

function loadcustomgame() {
    if (!getObj("customgames")) {
        setObj("customgames", [])
    }
    var customgames = getObj("customgames")
    var name = prompt("What should this game be named? (required)")
    var url = prompt("What's this game's url? (required)")
    var id = prompt("What's this game's ID? (required)")
    var icon = prompt("What's this game's icon? (optional)")
    var description = prompt("What's this game's description? (optional)")

    if (!name || !url || !id) return alert("All required fields must be filled in")
    if (name.length > 15) return alert("Game name is too long (max 30 characters)")

    if (id.includes(" ")) return alert("Game id cannot contain spaces")
    
    games.forEach(game => {
        if (game.id == id) localStorage.setItem("conflict", true);
    })

    if (localStorage.getItem("conflict")) {
        console.log("uhoh something went wrong!!")
        localStorage.removeItem("conflict")
        return;
    } else {
        console.log("everything is good!!")
        localStorage.removeItem("conflict")
    }

    customgames.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${id}", "image": "${icon}", "description": "${description}" }`))
    setObj("customgames", customgames)
    console.log("added custom game'!1!!!11!")
    window.location.href = self.location
    
    
    
    
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