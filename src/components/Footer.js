import '../styles/Footer.css';
import Facebook from '../assets/icon/facebook.svg';
import Twitter from '../assets/icon/twitter.svg';
import Youtube from '../assets/icon/youtube.svg';
import Instagram from '../assets/icon/instagram.svg';

function Footer() {
  return (
    <footer>
      <div class="footer-background">
        <div class="footer-content">
          <div class="name">©codeit - 2023</div>
          <div class="option">
            <a href="pages/privacy.html">Privacy Policy</a>
            <a href="pages/faq.html">FAQ</a>
          </div>
          <div class="social">
            <a href="https://www.facebook.com/" target="noopener noreferrer">
              <img src={Facebook} alt="페이스북 아이콘" />
            </a>
            <a href="https://twitter.com/" target="noopener noreferrer">
              <img src={Twitter} alt="트위터 아이콘" />
            </a>
            <a href="https://www.youtube.com/" target="noopener noreferrer">
              <img src={Youtube} alt="유튜브 아이콘" />
            </a>
            <a href="https://www.instagram.com/" target="noopener noreferrer">
              <img src={Instagram} alt="인스타그램 아이콘" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
