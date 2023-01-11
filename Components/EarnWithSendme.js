import Image from "next/image";
import styles from '../styles/Home.module.css';
import { BsArrowUpRight } from 'react-icons/bs';

const EarnWithSendme = () => {
  return ( 
    <div className={styles.earnWithSendme}>
      <div className={styles.col1}>
        <h2>Would you like to Earn With <span className={ styles.red}>Sendme</span>?</h2>
        <p>You can make money just by buying sendme products on behalf of your friends, colleagues, or neighbors.</p>

        <p>You can earn:</p>

        <div className={styles.box}>
          <Image src='/bullet.png'  width={20}  height={26} className={styles.boxImg}  alt='bullet'/>
          <li>
          <ol><b>N300</b> on every new customer order;</ol>
          </li>
        </div>

        <div className={styles.box}>
          <Image src='/bullet.png'  width={20}  height={26} className={styles.boxImg} alt='bullet'/>
          <li>
            <ol><b>N100</b> when they order product above N1,000; </ol>
          </li>
        </div>

        <div className={styles.box}>
          <Image src='/bullet.png'  width={20}  height={1} className={styles.boxImg} alt='bullet'/>
          <li>
            <ol><b>N50</b> when they order products below N1000.</ol>
          </li>
          
        </div>

        <button>
          Start Earning &nbsp;
          <BsArrowUpRight 
            style={{
              display: 'inline-block',
              paddingTop: '.3rem'
            }} 
          />
        </button>
      </div>

      <div  className={styles.col2}>
        <Image src='/ewsImg.png'  width={2000} height={41}  className={ styles.ewsImg }  alt='ews image'/>
      </div>

    </div>
   );
}
 
export default EarnWithSendme;