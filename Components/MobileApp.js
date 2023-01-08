import Image from "next/image";
import styles from '../styles/Home.module.css';

const MobileApp = () => {
  return ( 
    <div className={styles.mobileApp}>
      <div className={styles.box1}>
        <h2>Make The Best Meals With the Best Meat</h2>
        <p>Order meat on sendme mobile app</p>
      
        <div className={ styles.store }>
          <Image src='/app-store.png' width={142}  height={41} alt='app store'/>
          <Image src='/google-play.png' width={142}  height={41} alt='google play'/>
        </div>
      </div>

      <div className={styles.box2}>
        <Image src='/mobileScreen.png' width={ 500 } height={ 500 } className={ styles.mobileScreen }alt='mobile screen'/>
      </div>
    </div>
   );
}
 
export default MobileApp;