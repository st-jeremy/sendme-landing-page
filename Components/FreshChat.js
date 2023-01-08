import Image from "next/image";

const FreshChat = () => {
  return ( 
    <div  className={styles.freshchat}>
      <Image src='/freshchat-icon.png'  width={60} height={41}  className={ styles.freshchatIcon }  alt='freshchat icon'/>
    </div>
   );
}
 
export default FreshChat;