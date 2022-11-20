import styles from '../styles/WhoWeAre.module.css';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <div className={ styles.whoWeAre }>
      <div className={ styles.col }>
        <Image src='/sendme-logo.png' width={500}  height={200} className={ styles.logo } alt='google play'/>
      </div>

      <div className={ styles.col }>
        <div className={ styles.box }>
          <h1 className={ styles.mainHeading }>Who We Are</h1>
          <p className={ styles.para }>For us, our work begins where others see a “finish line”.
          We are driven by an intense passion to go for more, challenging ourselves to put our best into what we do and always strive to beat that best.
          <br />
          Breaking out of old patterns of thinking and behavior is a norm for us. This is clear in our products and services, as we invest the very best in every part of our operation, from the production, to packaging, and to the delivery of our meat products, giving you the best meat experience .
          </p>
        </div>

        <div className={ styles.box }>
          <h2 className={ styles.subHeading }>Our mission</h2>
          <p className={ styles.para }>
            We provide Nigerian households and food business the best animal protein at unbeatable prices because we believe that convenience should be accessible to all irrespective of social class.
          </p>
        </div>

        <div className={ styles.box }>
          <h2 className={ styles.subHeading }>Our Vision</h2>
          <p className={ styles.para }>
            To build a world-class team committed to achieving and surpassing excellence in the food value chain by leveraging on technology.
          </p>
        </div>

      </div>
    </div>
  );
}
 
export default WhoWeAre;