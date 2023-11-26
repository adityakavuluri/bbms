import '../assets/css/AppFooter.css'
import '../assets/css/global.css'
import {Link} from "react-router-dom";


function AppFooter(){
return(
  <footer id="footerHeight" className="container">
    <section className="links">
      <Link to="/">about</Link>
      <Link to="/">contact</Link>
      <Link to="/">directions</Link>
    </section>
    <section className="social-media-icons">


        <a href="">
            <img id="facebook" src={require('../assets/images/site/facebook.png')}
            alt="Facebook Logo"
                 width="30px"
                 height="30px"
            />
        </a>
        <a href="">
            <img id="twitter" src={require('../assets/images/site/twitter.png')}
                 alt="Twitter Logo"
                 width="30px"
                 height="30px"
            />
        </a>
    </section>
      <section className="copyright">
          <p>
              ©2023 Reading Studio
          </p>
      </section>
  </footer>
)
}
export default AppFooter;
