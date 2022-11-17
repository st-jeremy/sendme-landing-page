import Image from "next/image";
import styles from '../styles/Footer.module.css';


const Footer = () => {
  return (
    <div className={ styles.footer }>
      <Image src='/sendme-logo.png' width={142}  height={200} alt='google play'/>

      <div className={ styles.contactUs}>
        <h2>Contact Us</h2>
        <p>02, Olupitan Street, Ikolaba, Ibadan.</p>
        <p>0815 950 6999</p>
        <p>help@sendme.ng</p>
      </div>

      <div className={ styles.company}>
        <h2>Company</h2>
        <a href="">Career</a>
        <a href="">Contact Us</a>
      </div>

      <div className={ styles.earnWithSendme}>
        <h2>Products</h2>
        <a href="">Earn with Sendme</a> <br />
        <a href="">Order on Sendme</a> <br />
        <a href="">Sendme for Business</a>
      </div>

      <div className={ styles.getApp}>
        <p>Get the app</p>
        <div className={ styles.store }>
          <Image src='/app-store.png' width={142}  height={200} alt='app store'/>
          <Image src='/google-play.png' width={142}  height={200} alt='google play'/>
        </div>

      </div>

      <div  className={ styles.socialMedia}>
        <a href="http://linkedin.com"><Image src='/linkedin.png' width={30}  height={30} alt='LinkedIn'/></a>
        <a href="http://facebook.com"><Image src='/facebook.png' width={30}  height={30} alt='facebook'/></a>
        <a href="http://twitter.com"><Image src='/twitter.png' width={30}  height={30} alt='twitter'/></a>
      </div>

      <div className={ styles.subscribe}>
        <h2>Subscribe</h2>
        <input type="email" name="  &nsbsp Email address" id="email" placeholder="Email address" />

        <p>Subscribe to our newsletter to get the latest updates on our products and offerings</p>
      </div>

      <div  className={ styles.end}>
        <a href="">Terms</a>
        <a href="">Privacy</a>
      </div>
    </div>
   );
}
 
export default Footer;