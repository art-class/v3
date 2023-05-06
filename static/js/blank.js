if (window.self !== window.top) {
    
} else {
    document.querySelector("html").innerHTML = `
    
<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 404 (Not Found)!!1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>404.</b> <ins>That’s an error.</ins>
  <p>The requested URL <code>${window.location.pathname}${window.location.search}</code> was not found on this server.  <ins>That’s all we know.</ins>

    `
    alert("Click ` to enter the real site (\"this alert will be removed soon, it's just to notify people of the change.\")")
    document.addEventListener("keydown", (event) => {
      var key = localStorage.getItem("entrykey") || "`"
      if (event.key == key) {
        launch()
      }
    })
}

function launch() {
  const tab = window.open('about:blank', '_blank');
  const iframe = tab.document.createElement('iframe');
  const stl = iframe.style;
  stl.border = stl.outline = 'none';
  stl.width = '100vw';
  stl.height = '100vh';
  stl.position = 'fixed';
  stl.left = stl.right = stl.top = stl.bottom = '0';
  iframe.src = self.location;
  tab.document.body.appendChild(iframe);
  //window.parent.window.location.replace('https://classroom.google.com')
}