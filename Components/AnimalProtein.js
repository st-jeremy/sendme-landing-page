import Image from "next/image";
import styles from '../styles/Home.module.css';

const AnimalProtein = () => {
  return ( 
  <div className={styles.animalProtein}>
    <h2>Buy Animal Proteins</h2>
    <p>All your favorite meat in one stop </p>

    <div className={styles.products}>
      <div className={ styles.box }>
        <Image src='/goat.png' width={89}  height={89} alt='goat'/>
        <p>Goat</p>
      </div>
      <div className={ styles.box }>
        <Image src='/cow.png' width={89}  height={89} alt='cow'/>
        <p>Cow</p>
      </div>
      <div className={ styles.box }>
        <Image src='/fish.png' width={89}  height={89} alt='fish'/>
        <p>Fish</p>
      </div>
        <div className={ styles.box }>
        <Image src='/chicken.png' width={89}  height={89} alt='chicken'/>
        <p>Chicken</p>
      </div>
    </div>
  </div>
   );
}
 
export default AnimalProtein;