<template>
    <div>
        <h1>3123123123</h1>
        <footer class="footer">
            <div class="footer-top">
                <p>BE IN TOUCH WITH US:</p>
                <form class="newsletter">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">JOIN US</button>
                </form>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
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
                <!-- <div class="payment-icons">
                    <img src="stripe-logo.png" alt="Stripe" />
                    <img src="aes-logo.png" alt="AES" />
                    <img src="paypal-logo.png" alt="PayPal" />
                    <img src="visa-logo.png" alt="Visa" />
                    <img src="discover-logo.png" alt="Discover" />
                </div> -->
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

.footer-top {
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
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
  margin-top: 10px;
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
}

.payment-icons img {
  height: 25px;
  margin: 0 5px;
}

</style>