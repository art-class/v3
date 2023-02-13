var navbar = `
<link href="https://unpkg.com/movement.css/movement.css" rel="stylesheet" />

<nav>
  <div class="container">
    <img src="/icon.png" alt="Logo" data-m="bounce-right" />
    <ul>
      <li data-m="bounce-right"><a href="/">Home</a></li>
      <li data-m="bounce-right"><a href="/gs.html">Games</a></li>
      <li data-m="bounce-right"><a href="/apps.html">Apps</a></li>
      <li data-m="bounce-right"><a href="/utils.html">Utilities</a></li>
      <li data-m="bounce-right"><a href="/settings.html">Settings</a></li>
    </ul>
  </div>
</nav>
`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", navbar)