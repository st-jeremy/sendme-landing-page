import { Box } from "@chakra-ui/react";
import Image from "next/image";
import styles from '../styles/Home.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Slideshow from "./Slideshow";

const Header = () => {
  return ( 
    <Box className={ styles.header }>
      <div className={ styles.col1 }>
        <h1 className={ styles.mainHeading }>
          Get The <span className={ styles.red }> <br />
          Best Meat</span> in <span  className={ styles.grey }>30</span>Mins.
        </h1>
        <br />

        <p className={ styles.grey }>Focus on the things that matter while we handle your animal protein needs by giving you premium quality meat at the best prices.
        </p>
        <br />

        <button className={ styles.btn}>
          Order meat on web now &nbsp; &nbsp;
          <AiOutlineArrowRight 
            style={{
            display: 'inline-block',
            paddingTop: '.3rem'
            }} 
          />
        </button>
        <br />
        <br />

        <p className={ styles.black }>or Get the app</p>
        <div className={ styles.store }>
          <Image src='/app-store.png' width={142}  height={41} loading='lazy' alt='app store'/>
          <Image src='/google-play.png' width={142}  height={41} loading='lazy' alt='google play'/>
        </div>
      </div>

      <div className={ styles.col2 }>
        <Slideshow />
      </div>
    </Box>
   );
}
 
export default Header;