import Image from "next/image";
import styles from '../styles/Home.module.css';

const ComingSoon = () => {
  return ( 
    <div className={styles.comingSoon}>
      <Image src='/coming-soon-phone.png' width={700} height={51}  quality="100" className={styles.comingSoonPhone} alt='google play'/>
      <Image src='/coming-soon-phone.png' width={1400} height={51}  quality="100" className={styles.comingSoonTab} alt='google play'/>
      <Image src='/coming-soon-laptop.png' width={1940} height={51}  quality="100" className={styles.comingSoonLaptop} alt='google play'/>
    </div>
   );
}
 
export default ComingSoon;