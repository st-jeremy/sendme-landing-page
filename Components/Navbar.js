import Image from "next/image";

const Navbar = () => {

  return (
    <>
      <div>
        <Image src='/google-play.png' width={142}  height={200} alt='google play'/>

        <div>
          <h2>Contact Us</h2>
          <p>02, Olupitan Street, Ikolaba, 
          Ibadan.</p>
          <p>0815 950 6999</p>
          <p>help@sendme.ng</p>
        </div>

        <div>
          <h2>Company</h2>
          <a href="">Career</a>
          <a href="">Contact Us</a>
        </div>

        <div>
          <h2>Products</h2>
          <a href="">Earn with Sendme</a>
          <a href="">Order on Sendme</a>
          <a href="">Sendme for Business</a>
        </div>

        <div>
          <p>Get the app</p>
          <Image src='/google-play.png' width={142}  height={200} alt='google play'/>
        </div>

        <div>
          <a href=""><Image src='/google-play.png' width={142}  height={200} alt='google play'/></a>
          <a href=""><Image src='/google-play.png' width={142}  height={200} alt='google play'/></a>
          <a href=""><Image src='/google-play.png' width={142}  height={200} alt='google play'/></a>
        </div>

        <div>
          <h2>Subscribe</h2>
          <input type="email" name="Email address" id="" placeholder="Email address" /><Image src='/google-play.png' width={142}  height={200} alt='google play'/>

          <p>Subscribe to our news;etter to get the latest updates on our products and offerings</p>
        </div>

        <div>
          <a href="">Terms</a>
          <a href="">Privacy</a>
        </div>
      </div>
    </>
  );
}
 
export default Navbar;