import Image from "next/image";
import styles from '../styles/Home.module.css';

const FreshChat = () => {
  return ( 
    <div  className={styles.freshchat}>
      <Image src='/freshchat-icon.png'  width={60} height={41} className={ styles.freshchatIcon }  alt='freshchat icon'/>
    </div>
   );
}
 
export default FreshChat;