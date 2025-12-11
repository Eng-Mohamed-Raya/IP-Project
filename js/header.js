const container = document.createElement("div");
container.className = "container";

container.innerHTML = `
<header>
      <div class="logo"><h1>Coffee Shop</h1></div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="./menu.html">Menu</a></li>
          <li><a href="./about.html">About</a></li>
          <li><a href="./contact.html">Contact</a></li>
          <li><a href="/order" class="btn">order now</a></li>
        </ul>
      </nav>
    </header>
`;
document.body.appendChild(container);

// toggle action
function buttonToggle() {
  // variables
  let clk = document.getElementById("tsf");
  let ele = document.getElementById("spc");

  // start event
  clk.addEventListener("click", () => {
    let res = confirm("do you want to toggle");
    if (res === true) {
      document.body.style.backgroundColor = "black";
      ele.style.textAlign = "center";
      clk.innerHTML = "<i class='bx  bx-moon'></i>";
      clk.style.color = "#000";
      clk.style.borderRadius = "20px";
    } else {
      clk.innerHTML = "<i class='bx  bx-sun'></i>";

      document.body.style.backgroundColor = "#f8f7f6";
      ele.style.textAlign = "left";
      clk.style.color = "red";
    }
  });
}

buttonToggle();
