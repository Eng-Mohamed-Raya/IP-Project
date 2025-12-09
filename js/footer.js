const footerContainer = document.createElement("div");
footerContainer.className = "container";

footerContainer.innerHTML=`
<footer>
      <ul class="footer-links row">
        <li><a href="#">privacy policy</a></li>
        <li><a href="#">terms of service</a></li>
        <li><a href="#">contact us</a></li>
      </ul>
      <ul class="footer-social-media row">
        <li>
          <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
        </li>
      </ul>
      <p>&copy; 2024 Coffee Shop. All rights reserved.</p>
    </footer>
`
document.body.appendChild(footerContainer);
