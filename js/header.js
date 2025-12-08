
const container = document.createElement("div");
container.className = "container";


const header = document.createElement("header");


const logo = document.createElement("div");
logo.className = "logo";

const h1 = document.createElement("h1");
h1.textContent = "Coffee Shop";

logo.appendChild(h1);


const nav = document.createElement("nav");
const ul = document.createElement("ul");


const links = [
  { text: "Home", href: "/" },
  { text: "Menu", href: "./menu.html" },
  { text: "About", href: "./about.html" },
  { text: "Contact", href: "./contact.html" },
  { text: "order now", href: "/order", class: "btn" }
];


links.forEach(link => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = link.text;
  a.href = link.href;

  if (link.class) a.classList.add(link.class);

  li.appendChild(a);
  ul.appendChild(li);
});


nav.appendChild(ul);
header.appendChild(logo);
header.appendChild(nav);
container.appendChild(header);
document.body.appendChild(container);
