import Image from "next/image";
import styles from '../styles/Home.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const B2B = () => {
  return ( 
    <div className={styles.B2B}>
      <h2>
        We Also Sell <span className={ styles.red }>Meat</span> 
        <br />
        To Businesses.
      </h2>

      <p>We currently deliver a variety of the best animal protein to over 100 restaurants and hotels, helping them meet their business needs by creating the best meat experience for their customers and increasing their sales and profit margin.
      </p>

      <div className={styles.businesses}>
        <Image src='/spar-logo.png' width={88}  height={15} className={ styles.biz} alt='SPAR logo'/>
        <Image src='/kili-logo.png'  width={88}  height={15} className={ styles.biz} alt='Kilimanjaro logo'/>
        <Image src='/chicken-logo.png'  width={50}  height={40} className={ styles.biz} alt='Chicken and Co logo'/>
        <Image src='/B-logo.png'  width={20} height={15}  className={ styles.biz }  alt='B-logo'/>
      </div>
      <br />

      <a href="http://business.sendme.ng" className={ styles.B2BLink}>
        Order meat for your business &nbsp; &nbsp;
        <AiOutlineArrowRight  
          style={{
            display: 'inline-block',
            paddingTop: '.2rem'
          }}
        />
      </a>
    </div>
   );
}
 
export default B2B;