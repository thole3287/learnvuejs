<template>
  <div>
    <footer class="footer">
      <div class="footer-top">
        <p>BE IN TOUCH WITH US:</p>
        <form class="newsletter">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">JOIN US</button>
        </form>
        <div class="social-icons">
          <a href="#">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.0667 7.03693C13.0667 3.6652 10.3513 0.93335 6.99999 0.93335C3.64864 0.93335 0.933319 3.6652 0.933319 7.03693C0.933319 10.0833 3.15181 12.6084 6.05207 13.0667V8.80131H4.51094V7.03693H6.05207V5.69218C6.05207 4.16259 6.95718 3.31768 8.34346 3.31768C9.00737 3.31768 9.70161 3.4368 9.70161 3.4368V4.93809H8.93643C8.18299 4.93809 7.9479 5.40865 7.9479 5.89128V7.03693H9.63042L9.36134 8.80131H7.9479V13.0667C10.8482 12.6084 13.0667 10.0833 13.0667 7.03693Z"
                fill="white" />
            </svg>
          </a>
          <a href="#">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.4531 1.99414C12.9774 2.20469 12.4688 2.34688 11.9328 2.4125C12.4797 2.08438 12.9008 1.56484 13.0977 0.946875C12.5863 1.25039 12.0203 1.47187 11.416 1.58945C10.932 1.07266 10.243 0.75 9.48283 0.75C8.01993 0.75 6.83595 1.93672 6.83595 3.39961C6.83595 3.60742 6.85782 3.80977 6.90431 4.00391C4.70314 3.89453 2.75079 2.83906 1.4465 1.23398C1.21954 1.625 1.08829 2.08164 1.08829 2.56562C1.08829 3.48437 1.55861 4.29648 2.26954 4.77227C1.83204 4.76133 1.42189 4.64102 1.06642 4.44141V4.47422C1.06642 5.75938 1.9797 6.82852 3.19103 7.07188C2.96954 7.13203 2.73439 7.16484 2.49376 7.16484C2.32423 7.16484 2.15743 7.14844 1.99611 7.11562C2.33243 8.16836 3.31134 8.93398 4.47072 8.95586C3.56564 9.6668 2.42267 10.0906 1.18126 10.0906C0.967981 10.0906 0.757434 10.077 0.549622 10.0523C1.7172 10.8125 3.109 11.25 4.60197 11.25C9.47736 11.25 12.1406 7.21133 12.1406 3.70859C12.1406 3.59375 12.1379 3.47891 12.1324 3.3668C12.6492 2.99219 13.0977 2.52734 13.4531 1.99414Z"
                fill="white" />
            </svg>
          </a>
          <a href="#">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 5.17751C5.99649 5.17751 5.17754 5.99645 5.17754 6.99997C5.17754 8.00348 5.99649 8.82243 7 8.82243C8.00352 8.82243 8.82247 8.00348 8.82247 6.99997C8.82247 5.99645 8.00352 5.17751 7 5.17751ZM12.466 6.99997C12.466 6.24528 12.4729 5.49743 12.4305 4.74411C12.3881 3.86911 12.1885 3.09254 11.5486 2.4527C10.9074 1.81149 10.1322 1.61325 9.25723 1.57087C8.50254 1.52848 7.75469 1.53532 7.00137 1.53532C6.24668 1.53532 5.49883 1.52848 4.74551 1.57087C3.87051 1.61325 3.09395 1.81286 2.45411 2.4527C1.81289 3.09391 1.61465 3.86911 1.57227 4.74411C1.52989 5.49879 1.53672 6.24665 1.53672 6.99997C1.53672 7.75329 1.52989 8.5025 1.57227 9.25583C1.61465 10.1308 1.81426 10.9074 2.45411 11.5472C3.09532 12.1884 3.87051 12.3867 4.74551 12.4291C5.5002 12.4714 6.24805 12.4646 7.00137 12.4646C7.75606 12.4646 8.50391 12.4714 9.25723 12.4291C10.1322 12.3867 10.9088 12.1871 11.5486 11.5472C12.1898 10.906 12.3881 10.1308 12.4305 9.25583C12.4742 8.5025 12.466 7.75465 12.466 6.99997ZM7 9.80407C5.44825 9.80407 4.1959 8.55172 4.1959 6.99997C4.1959 5.44821 5.44825 4.19586 7 4.19586C8.55176 4.19586 9.80411 5.44821 9.80411 6.99997C9.80411 8.55172 8.55176 9.80407 7 9.80407ZM9.91895 4.7359C9.55665 4.7359 9.26407 4.44333 9.26407 4.08102C9.26407 3.71872 9.55665 3.42614 9.91895 3.42614C10.2813 3.42614 10.5738 3.71872 10.5738 4.08102C10.5739 4.16705 10.5571 4.25226 10.5242 4.33176C10.4913 4.41126 10.4431 4.4835 10.3823 4.54433C10.3214 4.60517 10.2492 4.6534 10.1697 4.68627C10.0902 4.71915 10.005 4.73601 9.91895 4.7359Z"
                fill="white" />
            </svg>
          </a>
          <a href="#">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2641_1237)">
                <path
                  d="M7 0.875C3.61758 0.875 0.875 3.61758 0.875 7C0.875 9.50742 2.38438 11.6621 4.5418 12.6109C4.52539 12.1844 4.53906 11.6703 4.64844 11.2055C4.76602 10.7078 5.43594 7.8668 5.43594 7.8668C5.43594 7.8668 5.23906 7.47578 5.23906 6.89883C5.23906 5.99101 5.76406 5.31289 6.42031 5.31289C6.97813 5.31289 7.24609 5.73125 7.24609 6.23164C7.24609 6.79219 6.88789 7.62891 6.70469 8.40547C6.55156 9.05625 7.03008 9.58398 7.67266 9.58398C8.83203 9.58398 9.61406 8.09375 9.61406 6.32734C9.61406 4.98477 8.70898 3.98125 7.06562 3.98125C5.20898 3.98125 4.04961 5.36758 4.04961 6.91523C4.04961 7.44844 4.2082 7.82578 4.4543 8.11562C4.56641 8.24961 4.58281 8.3043 4.5418 8.45742C4.51172 8.56953 4.44609 8.84023 4.41602 8.94961C4.375 9.10547 4.24922 9.16016 4.10977 9.10273C3.25391 8.75273 2.85469 7.81758 2.85469 6.76211C2.85469 5.02305 4.32305 2.93672 7.23242 2.93672C9.57031 2.93672 11.1098 4.6293 11.1098 6.44492C11.1098 8.84844 9.77266 10.6422 7.80391 10.6422C7.14219 10.6422 6.52148 10.284 6.3082 9.8793C6.3082 9.8793 5.95273 11.2902 5.87617 11.5637C5.74766 12.0367 5.49336 12.507 5.26094 12.8762C5.81055 13.0375 6.39297 13.1277 6.99727 13.1277C10.3797 13.1277 13.1223 10.3852 13.1223 7.00273C13.125 3.61758 10.3824 0.875 7 0.875Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2641_1237">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-middle">
        <div class="footer-column">
          <h3>CATEGORIES</h3>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Beauty</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>INFORMATION</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>CONTACT US</h3>
          <ul>
            <li>Ukraine, Kyiv, Khreshchatyk 1</li>
            <li>+38 (050) 12 34 567</li>
            <li>All week 24/7</li>
            <li><a href="mailto:shaman.magic.music@gmail.com">shaman.magic.music@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Copyright © 2032 all rights reserved</p>
        <div class="payment-icons">
          <img src="@/assets/images/Group 52.png" alt="Stripe" />
        </div>
        <p>Designed by Oleh Chabanov</p>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
.footer {
  background-color: #f9f9f9;
  color: #333;
  font-family: Arial, sans-serif;
}

.footer p {
  margin-bottom: 0;
}

.footer-top {
  text-align: center;
  /* padding: 20px; */
  background-color: #000;
  color: #fff;
  display: flex;
  align-content: center;
  align-items: center;
  margin: auto;
  justify-content: space-around;
}

.newsletter {
  margin: 10px 0;
}

.newsletter input {
  padding: 10px;
  width: 250px;
  border: none;
  border-radius: 3px 0 0 3px;
}

.newsletter button {
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
}

.social-icons {
  /* margin-top: 10px; */
  display: flex;
}

.social-icons a {
  color: #fff;
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
}

.footer-middle {
  display: flex;
  justify-content: space-around;
  padding: 20px 10px;
}

.footer-column h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin: 5px 0;
}

.footer-column ul li a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #000;
}

.footer-bottom {
  text-align: center;
  padding: 10px 20px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
}

.payment-icons img {
  height: 16px;
  margin: 0 5px;
}
</style>