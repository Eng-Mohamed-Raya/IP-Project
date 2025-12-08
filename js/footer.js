const footerContainer = document.createElement("div");
footerContainer.className = "container";

const footer = document.createElement("footer");


const footerLinks = document.createElement("ul");
footerLinks.className = "footer-links row";

const links1 = [
  { text: "privacy policy", href: "#" },
  { text: "terms of service", href: "#" },
  { text: "contact us", href: "#" }
];

links1.forEach(link => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = link.text;
  a.href = link.href;

  li.appendChild(a);
  footerLinks.appendChild(li);
});


const socialUl = document.createElement("ul");
socialUl.className = "footer-social-media row";

const socialIcons = [
  "fa-square-facebook",
  "fa-square-twitter",
  "fa-square-instagram"
];

socialIcons.forEach(iconClass => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const i = document.createElement("i");

  i.className = `fa-brands ${iconClass}`;
  a.appendChild(i);
  li.appendChild(a);
  socialUl.appendChild(li);
});


const p = document.createElement("p");
p.innerHTML = "&copy; 2024 Coffee Shop. All rights reserved.";


footer.appendChild(footerLinks);
footer.appendChild(socialUl);
footer.appendChild(p);

footerContainer.appendChild(footer);
document.body.appendChild(footerContainer);
