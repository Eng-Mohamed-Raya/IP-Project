const container = document.createElement("div");
container.className = "container";

container.innerHTML = `
<header>
      <div class="logo"><h1>Coffee Shop</h1></div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="./menu.html">Menu</a></li>
          <li><a href="./about.html">About</a></li>
          <li><a href="./contact.html">Contact</a></li>
          <li><a href="/order" class="btn">order now</a></li>
        </ul>
      </nav>
    </header>
`;
document.body.appendChild(container);
